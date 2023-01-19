import logo from './logo.svg';
import {useState}from 'react'
import './App.css';

const App = () => {
   const [texts, setTexts] = useState([]);
   const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      text: text,
    }

    setTexts([...texts, newItem])
    
  }

    console.log(texts)

  return (
    <div className="App">
      <form>
        <label>Tarefa finalizada</label>
        <input onChange={(event) => handleChange(event.target.value)} />
        <button onClick={(event) => handleSubmit(event)}>Adicionar</button>
      </form>
    </div>
  );
}

export default App;
