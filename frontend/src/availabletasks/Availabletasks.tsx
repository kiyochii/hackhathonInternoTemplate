import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseClient } from "../supabaseClient";

interface Task {
  id: string;
  task: string;
  payment: number;
  address: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabaseClient
        .from('tasks')
        .select('*');
      
      if (error) {
        console.error('Erro ao buscar tasks:', error);
      } else {
        setTasks(data || []);
      }
      setLoading(false);
    };

    fetchTasks();
  }, []); 

  if (loading) {
    return <p>Carregando tasks...</p>;
  }

  return (
    <main style={{
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '60vh', 
      overflowY: 'auto' 
    }}>

      <div style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '30px', textAlign: 'center' }}>Tarefas disponíveis</div>
      {tasks.length > 0 ? (
        <ul style={{ 
          listStyleType: 'none', 
          padding: 0, 
          width: '600px', 
          margin: '0 auto', // Centraliza a lista horizontalmente
        }}>
          {tasks.map(task => (
            <li key={task.id} style={{
              marginBottom: '20px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '16px',
              backgroundColor: '#4dc4ff',
              cursor: 'pointer',
            }}>
              <button
                onClick={() => navigate(`/tasks/${task.id}`)} 
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  textAlign: 'center',
                  width: '100%', 
                  height: '50px', 
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                }}
              >
                <h3 style={{ margin: '0', fontWeight: 'normal',fontSize: '1.2rem'  }}>{task.task}</h3> 
                <p style={{ margin: '5px 0 0 0', fontSize: '1rem' }}> <strong> Pagamento: </strong>{task.payment}</p> 
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma task encontrada.</p>
      )}
    </main>
  );
}
