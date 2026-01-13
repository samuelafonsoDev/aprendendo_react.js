
import {useState} from 'react';
export default function App() {
  const [number,setNumber] = useState(0);
  const [texto,setTexto]= useState(false);


  return (
    <div>
      <h1>Valor inicial {number}</h1>
      <button onClick={() =>setNumber(number+1)}>Incrementar</button>
      <h2>O texto aparecera aqui: <strong>{texto && <p>Mostrando samuel</p>}</strong></h2>
      <button onClick={()=>setTexto(!texto)}>Mostrar</button>
    </div>
  );
}