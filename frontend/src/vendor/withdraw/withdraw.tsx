import { useReadContract } from "wagmi";
import { storageAbi } from "../../generated";
function App() {
  const result = useReadContract({
    storageAbi,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    functionName: "totalSupply",
  });
}
