import './FiltroBusca.css';

function FiltroBusca({
  busca,
  onBuscaChange,
  categorias,
  categoriaSelecionada,
  onCategoriaChange,
  onLimpar,
  temFiltroAtivo,
  totalResultados,
  carregando,
}) {
  return (
    <div className="filtro">
      <div className="filtro__topo">
        <h2 className="filtro__titulo">
          <span className="filtro__subtitulo-label">Catálogo</span>
          Produtos em destaque
        </h2>

        {!carregando && (
          <span className="filtro__contagem">
            {totalResultados} {totalResultados === 1 ? 'produto' : 'produtos'}
          </span>
        )}
      </div>

      <div className="filtro__controles">
        {/* Campo de busca */}
        <div className="filtro__busca-wrap">
          <svg className="filtro__busca-icone" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            className="filtro__busca"
            placeholder="Buscar produtos..."
            value={busca}
            onChange={(e) => onBuscaChange(e.target.value)}
            aria-label="Buscar produtos"
          />
          {busca && (
            <button
              className="filtro__busca-limpar"
              onClick={() => onBuscaChange('')}
              aria-label="Limpar busca"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filtro por categoria */}
        <div className="filtro__categorias">
          <button
            className={`filtro__cat-btn ${categoriaSelecionada === '' ? 'filtro__cat-btn--ativo' : ''}`}
            onClick={() => onCategoriaChange('')}
          >
            Todas
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`filtro__cat-btn ${categoriaSelecionada === cat ? 'filtro__cat-btn--ativo' : ''}`}
              onClick={() => onCategoriaChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Botão limpar filtros */}
        {temFiltroAtivo && (
          <button className="filtro__limpar" onClick={onLimpar}>
            ✕ Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}

export default FiltroBusca;
