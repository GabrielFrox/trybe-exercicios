import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksList = ['Corrida matinal', 'Intervalo de descanso', 'Começar estudos'];

function App() {
  return (
    <ol>
      {tasksList.map(Task)}
    </ol>
  );
}

export default App;
