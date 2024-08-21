//import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
//import { hardhat, sepolia } from "wagmi/chains";
//import Contract from "./Contract";
import agendaIcon from './images/agenda.jpg'; 
import pedidoIcon from './images/pedido.png'; // Ajuste o caminho conforme necessário



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
        
        <button style={{ display: 'flex', alignItems: 'center', padding: '20px', fontSize: '20px', margin: '15px 0' }}>
          <img src={agendaIcon} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          Tarefas disponíveis
        </button>

        <button style={{ display: 'flex', alignItems: 'center', padding: '20px', fontSize: '20px', margin: '15px 0' }}>
          <img src={pedidoIcon} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          Criar nova tarefa
        </button>

      </div>
    </main>
  );
}
  
  export default App;
