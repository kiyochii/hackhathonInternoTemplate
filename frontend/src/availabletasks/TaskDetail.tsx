import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabaseClient } from "../supabaseClient";
import { useWriteStoragePay } from "../generated";
import { Address, parseEther } from "viem";
import { storageAbi } from "../abi";
import { useWriteContract } from "wagmi";

interface Task {
  id: string;
  task: string;
  payment: number;
  address: string;
}

export default function Task() {
  const { writeContractAsync } = useWriteStoragePay();
  const { id } = useParams<{ id: string }>(); // Extrair o id da URL com tipagem
  const [task, setTask] = useState<Task | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    supabaseClient
      .from("tasks")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => setTask(data));
  }, [id]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (file) {
      const { data, error } = await supabaseClient.storage.from("attachments").upload(`task-${id}/${file.name}`, file);

      if (error) {
        console.error("Erro ao fazer upload do arquivo:", error);
      } else {
        console.log("Arquivo enviado com sucesso:", data);
      }
    }
  };
  const handlePayment = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await writeContractAsync({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
      args: [task?.address as Address, BigInt(Number(task?.payment))],
      value: BigInt(Number(task?.payment)),
    });
  };
  return (
    <main style={{ padding: "20px" }}>
      <div
        style={{
          padding: "10px",
          border: "none",
        }}>
        <div style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px", textAlign: "center" }}>
          {task?.task}
        </div>
        <div style={{ fontSize: "1.5rem", marginBottom: "30px", textAlign: "center" }}>
          <strong>Pagamento:</strong> {task?.payment}
        </div>
        {
          <p>
            <strong>Address:</strong> {task?.address}
          </p>
        }
        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="file-upload-wrapper">
            <input type="file" onChange={handleFileChange} className="file-upload-input" />
          </div>
          <div style={{ marginTop: "15px" }}>
            <button type="submit">Enviar Arquivo</button>
          </div>
          <div>
            <button onClick={handlePayment}></button>
          </div>
        </form>
      </div>
    </main>
  );
}
