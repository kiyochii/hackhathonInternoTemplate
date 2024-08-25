import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

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
            fontSize: "20px", 
            margin: "15px 0", 
            width: "200px",
            textAlign: "center"
          }}
          onClick={() => navigate("/vendor/newtasks")}>
          Novas Tarefas
        </button>
        <button
          className="botao"
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            padding: "20px", 
            fontSize: "20px", 
            margin: "15px 0", 
            width: "200px",
            textAlign: "center"
          }}
          onClick={() => navigate("/vendor/withdraw")}>
          Withdraw
        </button>
    </main>
  );
}
