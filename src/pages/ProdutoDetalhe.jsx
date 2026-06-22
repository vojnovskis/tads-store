import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProduto } from '../hooks/useProduto';
import { useCarrinho } from '../context/CarrinhoContext';
import Botao from '../components/Botao';
import Selo from '../components/Selo';
import './ProdutoDetalhe.css';

function ProdutoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { produto, carregando, erro } = useProduto(id);
  const { adicionarItem, itens } = useCarrinho();

  const noCarrinho = itens.some((i) => i.id === produto?.id);
  const estaEsgotado = produto?.stock === 0;
  const freteGratis = produto?.price > 50;

  function handleAdicionar() {
    if (produto && !estaEsgotado) adicionarItem(produto);
  }

  const estrelas = (nota) => '★'.repeat(Math.round(nota)) + '☆'.repeat(5 - Math.round(nota));

  if (carregando) {
    return (
      <div className="detalhe-skeleton">
        <div className="skeleton skeleton--detalhe-img" />
        <div className="detalhe-skeleton__info">
          <div className="skeleton" style={{ height: 24, width: '40%' }} />
          <div className="skeleton" style={{ height: 36, width: '80%', marginTop: 8 }} />
          <div className="skeleton" style={{ height: 16, width: '60%', marginTop: 16 }} />
          <div className="skeleton" style={{ height: 48, marginTop: 32 }} />
        </div>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="detalhe-erro">
        <span style={{ fontSize: 40 }}>😕</span>
        <p>{erro}</p>
        <Botao onClick={() => navigate(-1)}>← Voltar</Botao>
      </div>
    );
  }

  if (!produto) return null;

  const { title, description, price, images, category, rating, stock, discountPercentage, brand, tags } = produto;

  return (
    <div className="detalhe">
      <nav className="detalhe__breadcrumb">
        <Link to="/">Início</Link>
        <span>/</span>
        <span>{category}</span>
        <span>/</span>
        <span className="detalhe__breadcrumb-atual">{title}</span>
      </nav>

      <div className="detalhe__grid">
        {/* Galeria */}
        <div className="detalhe__galeria">
          <div className="detalhe__img-principal">
            <img src={images?.[0] || produto.thumbnail} alt={title} />
          </div>
          {images?.length > 1 && (
            <div className="detalhe__thumbs">
              {images.slice(0, 4).map((img, i) => (
                <div key={i} className="detalhe__thumb">
                  <img src={img} alt={`${title} ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="detalhe__info">
          <div className="detalhe__selos">
            <Selo tipo="categoria">{category}</Selo>
            {freteGratis && <Selo tipo="frete">🚚 Frete grátis</Selo>}
            {estaEsgotado && <Selo tipo="esgotado">Esgotado</Selo>}
            {stock > 0 && stock <= 5 && <Selo tipo="pouco-estoque">Últimas {stock} und.</Selo>}
          </div>

          {brand && <p className="detalhe__marca">{brand}</p>}
          <h1 className="detalhe__titulo">{title}</h1>

          <div className="detalhe__avaliacao">
            <span className="detalhe__estrelas">{estrelas(rating)}</span>
            <span className="detalhe__nota">{rating?.toFixed(1)}</span>
            <span className="detalhe__estoque">{stock} em estoque</span>
          </div>

          <div className="detalhe__precos">
            {discountPercentage > 0 && (
              <div className="detalhe__de">
                <span className="detalhe__preco-original">
                  R$ {(price / (1 - discountPercentage / 100)).toFixed(2).replace('.', ',')}
                </span>
                <span className="detalhe__desconto-badge">-{Math.round(discountPercentage)}%</span>
              </div>
            )}
            <p className="detalhe__preco">R$ {price.toFixed(2).replace('.', ',')}</p>
            <p className="detalhe__parcelas">
              ou 12x de R$ {(price / 12).toFixed(2).replace('.', ',')} sem juros
            </p>
          </div>

          <p className="detalhe__descricao">{description}</p>

          {tags?.length > 0 && (
            <div className="detalhe__tags">
              {tags.map((tag) => (
                <span key={tag} className="detalhe__tag">#{tag}</span>
              ))}
            </div>
          )}

          <div className="detalhe__acoes">
            <Botao
              variante={estaEsgotado ? 'fantasma' : noCarrinho ? 'secundario' : 'primario'}
              disabled={estaEsgotado}
              onClick={handleAdicionar}
            >
              {estaEsgotado ? 'Produto esgotado' : noCarrinho ? '✓ Adicionado ao carrinho' : '🛒 Adicionar ao carrinho'}
            </Botao>

            {noCarrinho && (
              <Link to="/carrinho">
                <Botao variante="secundario">Ver carrinho →</Botao>
              </Link>
            )}
          </div>

          <div className="detalhe__garantias">
            {[
              { icone: '🔒', texto: 'Compra 100% segura' },
              { icone: '↩️', texto: 'Devolução em 30 dias' },
              { icone: '🚚', texto: freteGratis ? 'Frete grátis' : 'Entrega rápida' },
            ].map((g) => (
              <div key={g.texto} className="detalhe__garantia">
                <span>{g.icone}</span>
                <span>{g.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetalhe;
