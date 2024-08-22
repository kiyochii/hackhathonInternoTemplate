//import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
//import { hardhat, sepolia } from "wagmi/chains";
//import Contract from "./Contract";

//const CHAIN_ID = import.meta.env.DEV ? hardhat.id : sepolia.id;

function App() {
  //const account = useAccount();''
  //const { connectors, connect, status, error } = useConnect();
  //const { switchChain } = useSwitchChain();
  //const { disconnect } = useDisconnect();

  //const isCorrectChain = CHAIN_ID === account.chainId;

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
  
  export default App;
