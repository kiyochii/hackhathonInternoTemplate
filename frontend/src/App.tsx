import { Routes, Route, useNavigate } from "react-router-dom";
import AvailableTasks from "./availabletasks/Availabletasks";
import NewTasks from "./vendor/newtasks/NewTasks";
import agendaIcon from "./images/agenda.jpg";
import pedidoIcon from "./images/pedido.png";
import "@rainbow-me/rainbowkit/styles.css";
import Vendor from "./vendor/vendor";
import TaskDetail from "./availabletasks/TaskDetail";
import Header from "./Header";
import Withdraw from "./vendor/withdraw/withdraw";
import MyTasks from "./vendor/mytask/Mytask"; 

function Home() {
  const navigate = useNavigate();

  return (
    <main
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: "100px", marginBottom: "20px" }}>Tasks Help</h1>

        <button
          className="botao"
          style={{ display: "flex", alignItems: "center", padding: "20px", fontSize: "20px", margin: "15px 0" }}
          onClick={() => navigate("/availabletasks")}>
          <img src={agendaIcon} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
          Tarefas disponíveis
        </button>

        <button
          className="botao"
          style={{ display: "flex", alignItems: "center", padding: "20px", fontSize: "20px", margin: "15px 0" }}
          onClick={() => navigate("/vendor")}>
          <img src={pedidoIcon} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
          Sou um vendedor
        </button>
      </div>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/vendor" element={<Vendor />} />
        <Route path="/vendor/newtasks" element={<NewTasks />} />
        <Route path="/vendor/withdraw" element={<Withdraw />} />
        <Route path="/vendor/mytasks/:address" element={<MyTasks />} />
        <Route path="/availabletasks" element={<AvailableTasks />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
