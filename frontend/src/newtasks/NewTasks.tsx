import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useWriteStorageSetVendor } from "../generated";
import { supabaseClient } from "../supabaseClient";

export default function App() {
  const [newTask, setTask] = useState<string>("");
  const [payment, setPayment] = useState<number | "">("");

  const { writeContractAsync, isSuccess, isError, isPending } = useWriteStorageSetVendor();
  const { address: accountAddress } = useAccount();
  const strippedAddress: string | undefined = accountAddress as string;

  const handleSetTask = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value);
  };

  const handleSetPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await writeContractAsync({
        address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
        args: [BigInt(payment), newTask],
      });

      const { error } = await supabaseClient
        .from('tasks')
        .insert([
          { task: newTask, payment, address: strippedAddress },
        ]);

      if (error) {
        console.error("Error inserting data into Supabase:", error);
      } else {
        console.log("Data successfully inserted into Supabase");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
      <div style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '30px' }}>Crie sua tarefa</div>
      <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <textarea
            value={newTask}
            onChange={handleSetTask}
            placeholder="Digite a tarefa a ser pedida...."
            className="px-4 py-2 border rounded"
            style={{
              fontFamily: 'Arial, sans-serif',
              borderRadius: '12px',
              marginBottom: '24px',
              width: '400px',
              height: '80px',
              fontSize: '1.2rem',
              padding: '10px',
              overflowWrap: 'break-word',
              resize: 'none',
              border: '2px solid black',
              backgroundColor: '#F0F8FF'
            }}
          />
          <input
            type="number"
            value={payment}
            onChange={handleSetPayment}
            placeholder="Digite o valor para o cumprimento da tarefa..."
            className="px-4 py-2 border rounded"
            style={{backgroundColor: '#F0F8FF', border: '2px solid black', borderRadius: '12px', textAlign: 'center', marginBottom: '24px', width: '350px', height: '30px', fontSize: '1rem', padding: '10px', resize: 'none'}}
          />
          
          <button
            type="submit"
            disabled={isPending}
            style={{
              padding: '10px 20px',
              fontSize: '1.5rem',
              backgroundColor: isPending ? '#6c757d' : '#2196F3', // Cor de fundo: cinza quando está desabilitado, azul quando ativo
              borderRadius: '8px', 
              transition: 'transform 0.2s ease'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'} 
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
          {isSuccess && (
            <p style={{ color: 'green', fontSize: '1.5rem', fontWeight: '600'}}>Tarefa criada com sucesso!</p>)}
          {isError && (
            <p style={{ color: 'red', fontSize: '1.5rem', fontWeight: '700' }}>Erro: Tarefa não foi criada.</p>)}
        </div>
      </div>
    </main>
  );
}
