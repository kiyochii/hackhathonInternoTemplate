import { Routes, Route, useNavigate } from 'react-router-dom';
import AvailableTasks from './availabletasks/Availabletasks';
import NewTasks from './newtasks/NewTasks';
import agendaIcon from './images/agenda.jpg'; 
import pedidoIcon from './images/pedido.png'; 
import "@rainbow-me/rainbowkit/styles.css";
import Header from './Header';


function Home() {
  const navigate = useNavigate();

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '100px', marginBottom: '20px' }}>
          To Doing
        </h1>

       

        <button 
          className='botao' 
          style={{ display: 'flex', alignItems: 'center', padding: '20px', fontSize: '20px', margin: '15px 0' }}
          onClick={() => navigate('/availbletasks')}
        >
          <img src={agendaIcon} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          Tarefas disponíveis
        </button>

        <button 
          className='botao' 
          style={{ display: 'flex', alignItems: 'center', padding: '20px', fontSize: '20px', margin: '15px 0' }}
          onClick={() => navigate('/newtasks')}
        >
          <img src={pedidoIcon} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          Criar nova tarefa
        </button>
      </div>
    </main>
  );
}

function App() {
  return (
    
    <div>
            <Header /> {/* Adiciona o Header em todas as páginas */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/availbletasks" element={<AvailableTasks />} />
        <Route path="/newtasks" element={<NewTasks />} />
      </Routes>
      
    </div>
  );
}

export default App;
