import { Link } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext';
import { useAuth } from '../context/AuthContext';
import Botao from '../components/Botao';
import './Carrinho.css';

function Carrinho() {
  const { itens, removerItem, alterarQuantidade, totalItens, totalPreco, limparCarrinho } = useCarrinho();
  const { logado } = useAuth();

  if (itens.length === 0) {
    return (
      <div className="carrinho-vazio">
        <span className="carrinho-vazio__icone">🛒</span>
        <h2>Seu carrinho está vazio</h2>
        <p>Explore nosso catálogo e adicione produtos que você curtir.</p>
        <Link to="/"><Botao variante="primario">← Ver produtos</Botao></Link>
      </div>
    );
  }

  const frete = totalPreco > 200 ? 0 : 29.90;
  const total = totalPreco + frete;

  return (
    <div className="carrinho">
      <div className="carrinho__header">
        <h1 className="carrinho__titulo">Carrinho</h1>
        <span className="carrinho__contagem">{totalItens} {totalItens === 1 ? 'item' : 'itens'}</span>
      </div>

      <div className="carrinho__grid">
        {/* Lista de itens */}
        <div className="carrinho__itens">
          {itens.map((item) => (
            <div key={item.id} className="carrinho-item">
              <Link to={`/produto/${item.id}`} className="carrinho-item__img-wrap">
                <img src={item.thumbnail} alt={item.title} className="carrinho-item__img" />
              </Link>

              <div className="carrinho-item__info">
                <p className="carrinho-item__categoria">{item.category}</p>
                <Link to={`/produto/${item.id}`}>
                  <h3 className="carrinho-item__nome">{item.title}</h3>
                </Link>
                <p className="carrinho-item__preco-unit">
                  R$ {item.price.toFixed(2).replace('.', ',')} / un.
                </p>
              </div>

              <div className="carrinho-item__controles">
                <div className="carrinho-item__qtd">
                  <button
                    className="carrinho-item__qtd-btn"
                    onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}
                    disabled={item.quantidade <= 1}
                    aria-label="Diminuir"
                  >−</button>
                  <span className="carrinho-item__qtd-num">{item.quantidade}</span>
                  <button
                    className="carrinho-item__qtd-btn"
                    onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}
                    aria-label="Aumentar"
                  >+</button>
                </div>

                <p className="carrinho-item__subtotal">
                  R$ {(item.price * item.quantidade).toFixed(2).replace('.', ',')}
                </p>

                <button
                  className="carrinho-item__remover"
                  onClick={() => removerItem(item.id)}
                  aria-label="Remover item"
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="3,6 5,6 21,6"/><path d="M19,6l-1,14H6L5,6"/><path d="M10,11v6"/><path d="M14,11v6"/><path d="M9,6V4h6v2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <button className="carrinho__limpar" onClick={limparCarrinho}>
            🗑 Limpar carrinho
          </button>
        </div>

        {/* Resumo */}
        <aside className="carrinho__resumo">
          <h2 className="carrinho__resumo-titulo">Resumo do pedido</h2>

          <div className="carrinho__resumo-linha">
            <span>Subtotal ({totalItens} itens)</span>
            <span>R$ {totalPreco.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="carrinho__resumo-linha">
            <span>Frete</span>
            <span className={frete === 0 ? 'carrinho__resumo-gratis' : ''}>
              {frete === 0 ? 'Grátis 🎉' : `R$ ${frete.toFixed(2).replace('.', ',')}`}
            </span>
          </div>

          {frete > 0 && (
            <p className="carrinho__resumo-dica">
              Adicione mais R$ {(200 - totalPreco).toFixed(2).replace('.', ',')} para frete grátis!
            </p>
          )}

          <div className="carrinho__resumo-total">
            <span>Total</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>

          {logado ? (
            <Botao variante="primario">Finalizar compra →</Botao>
          ) : (
            <div className="carrinho__resumo-login">
              <p>Faça login para finalizar sua compra.</p>
              <Link to="/login">
                <Botao variante="primario">Entrar para finalizar →</Botao>
              </Link>
            </div>
          )}

          <Link to="/" className="carrinho__continuar">← Continuar comprando</Link>
        </aside>
      </div>
    </div>
  );
}

export default Carrinho;
