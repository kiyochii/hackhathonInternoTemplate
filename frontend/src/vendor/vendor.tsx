import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <button
          className="botao"
          style={{ display: "flex", alignItems: "center", padding: "20px", fontSize: "20px", margin: "15px 0" }}
          onClick={() => navigate("/vendor/newtasks")}>
          Novas Tarefas
        </button>
        <button
          className="botao"
          style={{ display: "flex", alignItems: "center", padding: "20px", fontSize: "20px", margin: "15px 0" }}
          onClick={() => navigate("/vendor/withdraw")}>
          Withdraw
        </button>
        <button
          className="botao"
          style={{ display: "flex", alignItems: "center", padding: "20px", fontSize: "20px", margin: "15px 0" }}
          onClick={() => navigate("/vendor/newtasks")}>
          Minhas Tarefas
        </button>
      </div>
    </main>
  );
}
