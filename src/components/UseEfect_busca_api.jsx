import React from 'react'
import { useState, useEffect } from 'react';
export default function UseEfect_busca_api() {
    const [username, setUsername] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((data) => setUsername(data))
            
    }, [])
    return (
        <div>
            <h1>Usuarios</h1>

            <ul>
                {username.map(user => (
                    <li className='text-red-400' key={user.id}>{user.name}</li>

                ))
                }
            </ul>
        </div>
    )
}
