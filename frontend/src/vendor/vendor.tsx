import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi';
import lampadaIcon from "../images/lampada.png";
import saqueIcon from "../images/saque.png";
import arquivoIcon from "../images/arquivo.png";


export default function App() {
  const navigate = useNavigate();
  const { address } = useAccount(); // Obtém o endereço da MetaMask

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
          fontSize: "3.5rem",
          textAlign: "center",
        }}
      >
        Painel do Criador
      </h1>
      <button
        className="botao"
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "20px", 
          fontSize: "25px", 
          margin: "15px 0", 
          width: "280px",
          textAlign: "center"
        }}
        onClick={() => navigate("/vendor/newtasks")}  
      >
        <img 
          src={lampadaIcon} 
          style={{ 
            width: "50px", 
            height: "50px", 
            marginRight: "20px", 
            objectFit: "contain" 
          }} 
        />
        <span style={{ flex: 1, textAlign: "left" }}>Novas Tarefas</span>
      </button>
      <button
        className="botao"
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "20px", 
          fontSize: "30px", 
          margin: "15px 0", 
          width: "280px",
        }}
        onClick={() => navigate("/vendor/withdraw")} 
      >
        <img 
          src={saqueIcon} 
          style={{ 
            width: "60px", 
            height: "60px", 
            marginRight: "40px", 
            objectFit: "contain" 
          }} 
        />
        <span style={{ flex: 1, textAlign: "left" }}>Saque</span>
      </button>

      <button
        className="botao"
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "20px", 
          fontSize: "30px", 
          margin: "15px 0", 
          width: "280px",
        }}
  onClick={() => {
    if (address) {
      navigate(`/vendor/mytasks/${address}`);
    } else {
      console.error('Conecte-se ao MetaMask');
    }
  }}
  disabled={!address} 
      ><img 
        src={arquivoIcon} 
        style={{ 
          width: "60px", 
          height: "60px", 
          marginRight: "40px",
          objectFit: "contain" 
          }} 
      />
    <span style={{ flex: 1, textAlign: "center", fontSize: "20px" }}>Minhas Tarefas</span>
    </button>


    </main>
  );
}
