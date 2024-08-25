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
      address: "0x68383898df826e4c00a80bb23f13573bc57755c9",
      args: [task?.address as Address, BigInt(Number(task?.payment))],
      value: BigInt(Number(task?.payment)),
    });
  };

  return (
    <main style={{ padding: "20px", fontFamily: "'Roboto', sans-serif", minHeight: "100vh" }}>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px", textAlign: "center", color: "#333" }}>
          {task?.task}
        </div>
        <div style={{ fontSize: "1.5rem", marginBottom: "30px", textAlign: "center" }}>
          <strong>Pagamento:</strong> {task?.payment}
        </div>

        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="file-upload-wrapper" style={{ marginBottom: "20px" }}>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-upload-input"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Enviar Arquivo
            </button>
          </div>
          <div style={{ marginTop: "15px" }}>
          </div>
        </form>
      </div>
    </main>
  );
}
