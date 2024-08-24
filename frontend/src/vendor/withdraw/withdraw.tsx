import * as React from "react";
import { useWriteContract } from "wagmi";
import { storageAbi } from "../../generated";
import { stopImpersonatingAccount } from "viem/actions";

export default function Page() {
  const { data: hash, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    writeContract({
      address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
      abi: storageAbi,
      functionName: "Withdraw",
      args: [BigInt(10)],
    });
  }

  return (
    <form onSubmit={submit}>
      <button disabled={isPending} type="submit">
        {isPending ? "Confirming..." : "Mint"}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  );
}
