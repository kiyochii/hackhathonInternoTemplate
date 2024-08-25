import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabaseClient } from "../../supabaseClient";

const MyTasks = () => {
  const { address } = useParams(); 
  const [tasks, setTasks] = useState<any[]>([]); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('links')
          .select('link, task')
          .eq('address', address); 

        if (error) {
          console.error('Erro ao buscar tarefas:', error);
        } else {
          setTasks(data || []); 
        }
      } catch (error) {
        console.error('Erro inesperado:', error);
      }
    };

    if (address) {
      fetchTasks();
    }
  }, [address]); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '50vh', justifyContent: 'center' }}>
      <h1  style={{fontSize: "3.5rem"}}>Minhas Tarefas</h1>
      
      <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #ccc', 
                padding: '10px', 
                borderRadius: '8px', 
                marginBottom: '15px',
                backgroundColor: '#b4d9ee',
                width: '100%',
                textAlign: 'left'
              }}>
              <h2 style={{ marginBottom: '8px', textAlign: 'center' }}> {task.task}</h2>
              <p style={{ textAlign: 'center' }}>
                Link: <a href={task.link} target="_blank" rel="noopener noreferrer">{task.link}</a>
              </p>
            </div>
          ))
        ) : (
          <p>Nenhuma tarefa encontrada para este endereço.</p>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
