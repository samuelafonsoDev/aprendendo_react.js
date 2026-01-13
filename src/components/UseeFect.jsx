import React from 'react'
import { useState,useEffect } from 'react';
import Button from './components/Button';
import Form from './components/Form';
export default function App() {
  
  return (
    <div>
       
        {/*<Button title="Clique aqui" onClick={()=>setMostrar(!mostra)}/>
        <Form/>
        {mostra && "Mostrado item"}*/}
        <h1>contador: {cont}</h1>
        <button onClick={()=>setCont(cont+1)}>+</button>
        <button onClick={()=>setCont(cont-1)}>-</button>
    </div>
  )
}
