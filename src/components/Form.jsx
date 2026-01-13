
//APRENDENDO FORMULARIOS NO REACT JS COM USESTATE E USEFFECT
import React from 'react'
import { useState } from 'react'
export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    function enviar(e){
        e.preventDefault()//para evitar o recarregamento da pagina
        alert("Nome:"+name+" Email:"+email )
    }
    return (
        <div>
            <form onSubmit={enviar}>
                <input type="text"
                    value={name} id=""
                    placeholder='Digite alguma coisa'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    placeholder='Digite o email '
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
                <button type='submit'>Enviar Dados</button>


            </form>

        </div>
    )
}
