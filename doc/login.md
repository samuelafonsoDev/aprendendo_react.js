import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function enviar(e) {
    e.preventDefault();
    alert(`🔥 Sucesso!\nNome: ${name}\nEmail: ${email}`);
  }

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <h2 style={styles.title}>Bem-vindo <span style={styles.accent}>.</span></h2>
        <p style={styles.subtitle}>Preencha os dados para continuar.</p>
        
        <form onSubmit={enviar} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome Completo</label>
            <input
              type="text"
              value={name}
              placeholder='Ex: João Silva'
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail Profissional</label>
            <input
              type="email"
              value={email}
              placeholder='seu@email.com'
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type='submit' style={styles.button}>
            Enviar Dados
          </button>
        </form>
      </div>
    </div>
  );
}

// Estilização (Pode ser movida para um arquivo CSS)
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0a', // Fundo bem escuro
    fontFamily: "'Inter', sans-serif",
    backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255, 102, 0, 0.15) 0%, transparent 40%)',
  },
  glassCard: {
    background: 'rgba(25, 25, 25, 0.8)',
    backdropFilter: 'blur(12px)',
    padding: '40px',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    margin: '0 0 8px 0',
    fontWeight: '700',
  },
  accent: {
    color: '#ff6600', // Laranja vibrante
  },
  subtitle: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: '#bbb',
    fontSize: '0.85rem',
    fontWeight: '500',
    marginLeft: '4px',
  },
  input: {
    backgroundColor: '#1a1a1a',
    border: '1.5px solid #333',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
    boxShadow: '0 4px 15px rgba(255, 102, 0, 0.3)',
  }
};
