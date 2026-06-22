import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Botao from '../components/Botao';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const { entrar, erro, carregando, logado } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (logado) navigate('/minha-conta');
  }, [logado, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await entrar(email, senha);
    if (ok) navigate('/minha-conta');
  }

  function preencherTeste() {
    setEmail('aluno@tads.com');
    setSenha('tads2025');
  }

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__topo">
          <span className="login__logo">⚡</span>
          <h1 className="login__titulo">Entrar na TADS Store</h1>
          <p className="login__subtitulo">Acesse sua conta para continuar</p>
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__campo">
            <label className="login__label" htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              className="login__input"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="login__campo">
            <label className="login__label" htmlFor="senha">Senha</label>
            <div className="login__input-wrap">
              <input
                id="senha"
                type={mostrarSenha ? 'text' : 'password'}
                className="login__input"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login__toggle-senha"
                onClick={() => setMostrarSenha((v) => !v)}
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {mostrarSenha ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          {erro && (
            <div className="login__erro" role="alert">
              ⚠️ {erro}
            </div>
          )}

          <Botao tipo="submit" variante="primario" disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar →'}
          </Botao>
        </form>

        <div className="login__dica">
          <p>Credenciais de teste:</p>
          <button className="login__btn-teste" onClick={preencherTeste} type="button">
            Preencher automaticamente
          </button>
          <code className="login__credenciais">
            aluno@tads.com / tads2025
          </code>
        </div>

        <p className="login__voltar">
          <Link to="/">← Voltar à loja</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
