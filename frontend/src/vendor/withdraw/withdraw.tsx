import * as React from "react";
import { useWriteContract } from "wagmi";
import { storageAbi } from "../../generated";
import fundoImage from "../../images/dindin.png";

export default function Page() {
  const { data: hash, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    writeContract({
      address: "0x68383898df826e4c00a80bb23f13573bc57755c9",
      abi: storageAbi,
      functionName: "Withdraw",
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
      }}>
      <form
        onSubmit={submit}
        style={{
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}>
        <button
          disabled={isPending}
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: isPending ? "#6c757d" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isPending ? "not-allowed" : "pointer",
            fontSize: "1.5rem",
            width: "100%",
          }}>
          {isPending ? "Aguarde..." : "Clique para sacar"}
        </button>
        <img src={fundoImage} style={{ marginTop: "20px", maxWidth: "100%", height: "auto", borderRadius: "5px" }} />
      </form>
    </div>
  );
}
