import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabaseClient } from "../supabaseClient";
import { useWriteStoragePay } from "../generated";
import { Address, parseGwei } from "viem";

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
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    supabaseClient
      .from("tasks")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => setTask(data));
  }, [id]);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (link && task) {
      const { data, error } = await supabaseClient
        .from("links")
        .insert({ link, address: task.address, task: task.task });

      if (error) {
        console.error("Erro ao enviar o link:", error);
      } else {
        console.log("Link enviado com sucesso:", data);
      }
    }
  };

  const handlePayment = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await writeContractAsync({
      address: "0x68383898df826e4c00a80bb23f13573bc57755c9",
      args: [task?.address as Address],
      value: parseGwei(String(task?.payment)),
    });
  };

  return (
    <main style={{ padding: "20px", fontFamily: "'Roboto', sans-serif", minHeight: "100vh" }}>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "0 auto",
        }}>
        <div
          style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px", textAlign: "center", color: "#333" }}>
          {task?.task}
        </div>
        <div style={{ fontSize: "1.5rem", marginBottom: "30px", textAlign: "center" }}>
          <strong>Pagamento:</strong> {task?.payment}
        </div>

        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="text-input-wrapper" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              onChange={handleLinkChange}
              className="text-input"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box",
              }}
              placeholder="Insira o link do drive contendo o arquivo aqui..."
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <button
              className="botao"
              type="submit"
              style={{
                fontSize: "1.5rem",
              }}>
              Enviar arquivo
            </button>
            <button
              onClick={handlePayment}
              className="botao"
              type="submit"
              style={{
                fontSize: "1.5rem",
              }}>
              Pagar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
