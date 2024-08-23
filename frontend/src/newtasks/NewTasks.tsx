import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useContractWrite } from "wagmi";


export default function App() {
  const [newTask, setTask] = useState<string>("");
  const [payment, setPayment] = useState<number | "">("");

  /* const { writeContractAsync, isSuccess, isError, isPending } =
    useWriteCounterSetVendor();*/

  const { address: accountAddress } = useAccount();
  const strippedAddress: string | undefined = accountAddress as string;

  const handleSetTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value === "" ? "" : String(event.target.value));
  };

  const handleSetPayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await writeContractAsync({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
      args: [String(newTask), BigInt(payment)],
    });
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Vendor Registration</div>
      <br />
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="string"
              value={newTask}
              onChange={handleSetTask}
              placeholder="Digite a tarefa a ser pedida:"
              className="px-4 py-2 border rounded"
            />
            <input
              type="number"
              value={payment}
              onChange={handleSetPayment}
              placeholder="Digite o valor para o comprimento da tarefa:"
              className="px-4 py-2 border rounded"
            />
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {isSuccess && (
            <p style={{ color: 'green', marginTop: '16px', fontSize: '1.2rem' }}>Tarefa criada com sucesso!</p>
          )}
          {isError && <p style={{ color: 'red', marginTop: '16px', fontSize: '1.5rem', fontWeight: '700' }}>Error:</p>}
        </header>
      </div>
    </main>
  );
}





/* 
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '100px', marginBottom: '20px' }}>
          To Doing
        </h1>
      </div>
    </main>
  );
}
  
  export default App;*/
