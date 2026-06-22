import { Link } from 'react-router-dom';
import { useCarrinho } from '../context/CarrinhoContext';
import Selo from './Selo';
import Botao from './Botao';
import './ProdutoCard.css';

function ProdutoCard({ produto }) {
  const { adicionarItem, itens } = useCarrinho();
  const { id, title, price, thumbnail, category, rating, stock, discountPercentage } = produto;

  const estaEsgotado = stock === 0;
  const poucoEstoque = stock > 0 && stock <= 5;
  const temDesconto = discountPercentage > 0;
  const noCarrinho = itens.some((i) => i.id === id);
  const freteGratis = price > 50;

  function handleAdicionar(e) {
    e.preventDefault();
    if (!estaEsgotado) adicionarItem(produto);
  }

  const estrelas = (nota) => '★'.repeat(Math.round(nota)) + '☆'.repeat(5 - Math.round(nota));

  return (
    <Link to={`/produto/${id}`} className={`produto-card ${estaEsgotado ? 'produto-card--esgotado' : ''}`}>
      <div className="produto-card__imagem-wrap">
        <img src={thumbnail} alt={title} className="produto-card__imagem" loading="lazy" />
        {temDesconto && (
          <div className="produto-card__badge-desconto">-{Math.round(discountPercentage)}%</div>
        )}
      </div>

      <div className="produto-card__corpo">
        <div className="produto-card__selos">
          <Selo tipo="categoria">{category}</Selo>
          {freteGratis && !estaEsgotado && <Selo tipo="frete">🚚 Frete grátis</Selo>}
          {estaEsgotado && <Selo tipo="esgotado">Esgotado</Selo>}
          {poucoEstoque && <Selo tipo="pouco-estoque">Últimas {stock} und.</Selo>}
        </div>

        <h3 className="produto-card__nome">{title}</h3>

        <div className="produto-card__avaliacao">
          <span className="produto-card__estrelas">{estrelas(rating)}</span>
          <span className="produto-card__nota">{rating?.toFixed(1)}</span>
        </div>

        <div className="produto-card__precos">
          {temDesconto && (
            <span className="produto-card__preco-original">
              R$ {(price / (1 - discountPercentage / 100)).toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className="produto-card__preco">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          <span className="produto-card__parcelas">
            ou 12x de R$ {(price / 12).toFixed(2).replace('.', ',')}
          </span>
        </div>

        <Botao
          variante={estaEsgotado ? 'fantasma' : noCarrinho ? 'secundario' : 'primario'}
          disabled={estaEsgotado}
          onClick={handleAdicionar}
        >
          {estaEsgotado ? 'Esgotado' : noCarrinho ? '✓ Adicionado' : '🛒 Adicionar'}
        </Botao>
      </div>
    </Link>
  );
}

export default ProdutoCard;
