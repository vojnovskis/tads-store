import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCarrinho } from '../context/CarrinhoContext';
import Botao from '../components/Botao';
import './MinhaConta.css';

function MinhaConta() {
  const { usuario, sair } = useAuth();
  const { itens, totalItens, totalPreco } = useCarrinho();

  return (
    <div className="conta">
      <div className="conta__header">
        <div className="conta__avatar">{usuario.avatar}</div>
        <div>
          <h1 className="conta__nome">{usuario.nome}</h1>
          <p className="conta__email">{usuario.email}</p>
        </div>
        <div className="conta__header-acoes">
          <Botao variante="fantasma" onClick={sair}>Sair da conta</Botao>
        </div>
      </div>

      <div className="conta__grid">
        {/* Resumo do carrinho */}
        <div className="conta__card">
          <h2 className="conta__card-titulo">🛒 Meu Carrinho</h2>
          {itens.length === 0 ? (
            <div className="conta__vazio">
              <p>Nenhum item no carrinho.</p>
              <Link to="/"><Botao variante="secundario">Explorar produtos</Botao></Link>
            </div>
          ) : (
            <>
              <div className="conta__carrinho-itens">
                {itens.slice(0, 3).map((item) => (
                  <div key={item.id} className="conta__item">
                    <img src={item.thumbnail} alt={item.title} className="conta__item-img" />
                    <div className="conta__item-info">
                      <p className="conta__item-nome">{item.title}</p>
                      <p className="conta__item-qtd">{item.quantidade}x · R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <p className="conta__item-sub">
                      R$ {(item.price * item.quantidade).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                ))}
                {itens.length > 3 && (
                  <p className="conta__mais">+{itens.length - 3} outros itens</p>
                )}
              </div>
              <div className="conta__resumo-total">
                <span>{totalItens} {totalItens === 1 ? 'item' : 'itens'}</span>
                <span className="conta__total">R$ {totalPreco.toFixed(2).replace('.', ',')}</span>
              </div>
              <Link to="/carrinho">
                <Botao variante="primario">Ir para o carrinho →</Botao>
              </Link>
            </>
          )}
        </div>

        {/* Info da conta */}
        <div className="conta__card">
          <h2 className="conta__card-titulo">👤 Informações da conta</h2>
          <div className="conta__info-lista">
            {[
              { label: 'Nome', valor: usuario.nome },
              { label: 'E-mail', valor: usuario.email },
              { label: 'Plano', valor: 'Cliente TADS' },
              { label: 'Membro desde', valor: 'Jun / 2025' },
            ].map((item) => (
              <div key={item.label} className="conta__info-item">
                <span className="conta__info-label">{item.label}</span>
                <span className="conta__info-valor">{item.valor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links rápidos */}
        <div className="conta__card">
          <h2 className="conta__card-titulo">⚡ Ações rápidas</h2>
          <div className="conta__acoes-rapidas">
            {[
              { emoji: '📦', label: 'Meus pedidos', desc: 'Acompanhe suas compras' },
              { emoji: '❤️', label: 'Favoritos', desc: 'Produtos salvos' },
              { emoji: '📍', label: 'Endereços', desc: 'Gerencie seus endereços' },
              { emoji: '🔔', label: 'Notificações', desc: 'Alertas de preço' },
            ].map((a) => (
              <button key={a.label} className="conta__acao">
                <span className="conta__acao-icone">{a.emoji}</span>
                <div>
                  <p className="conta__acao-label">{a.label}</p>
                  <p className="conta__acao-desc">{a.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinhaConta;
