import { Link, useNavigate } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext';
import { useAuth } from '../context/AuthContext';
import './Cabecalho.css';

function Cabecalho() {
  const { totalItens } = useCarrinho();
  const { logado, usuario, sair } = useAuth();
  const navigate = useNavigate();

  function handleSair() {
    sair();
    navigate('/');
  }

  return (
    <header className="cabecalho">
      <div className="cabecalho__inner">
        <Link to="/" className="cabecalho__marca">
          <span className="cabecalho__logo-icone">⚡</span>
          <span className="cabecalho__logo-texto">
            TADS <strong>Store</strong>
          </span>
        </Link>

        <nav className="cabecalho__nav">
          <Link to="/" className="cabecalho__nav-link">Produtos</Link>
          <Link to="/carrinho" className="cabecalho__nav-link">Carrinho</Link>
          {logado && <Link to="/minha-conta" className="cabecalho__nav-link">Minha Conta</Link>}
        </nav>

        <div className="cabecalho__acoes">
          {logado ? (
            <div className="cabecalho__usuario">
              <span className="cabecalho__avatar">{usuario.avatar}</span>
              <span className="cabecalho__usuario-nome">{usuario.nome}</span>
              <button className="cabecalho__btn-sair" onClick={handleSair}>Sair</button>
            </div>
          ) : (
            <Link to="/login" className="cabecalho__btn-entrar">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              Entrar
            </Link>
          )}

          <Link to="/carrinho" className="cabecalho__carrinho" aria-label="Carrinho">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalItens > 0 && (
              <span className="cabecalho__carrinho-badge">{totalItens > 99 ? '99+' : totalItens}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;
