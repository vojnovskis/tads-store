import ProdutoCard from './ProdutoCard';
import './Vitrine.css';

function Vitrine({ produtos, carregando, erro, temFiltroAtivo, onLimparFiltros }) {
  if (carregando) {
    return (
      <div className="vitrine__grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="produto-card produto-card--skeleton">
            <div className="skeleton skeleton--img" />
            <div className="produto-card__corpo">
              <div className="skeleton skeleton--tag" />
              <div className="skeleton skeleton--title" />
              <div className="skeleton skeleton--text" />
              <div className="skeleton skeleton--btn" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (erro) {
    return (
      <div className="vitrine__erro">
        <span className="vitrine__erro-icone">⚠️</span>
        <p className="vitrine__erro-titulo">Não foi possível carregar os produtos</p>
        <p className="vitrine__erro-msg">{erro}</p>
      </div>
    );
  }

  if (produtos.length === 0 && temFiltroAtivo) {
    return (
      <div className="vitrine__vazio">
        <span className="vitrine__vazio-icone">🔍</span>
        <p className="vitrine__vazio-titulo">Nenhum produto encontrado</p>
        <p className="vitrine__vazio-msg">Tente outros termos ou remova os filtros.</p>
        <button className="vitrine__vazio-btn" onClick={onLimparFiltros}>
          Limpar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="vitrine__grid">
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default Vitrine;
