import { useState, useMemo } from 'react';
import { useProdutos } from '../hooks/useProdutos';
import Vitrine from '../components/Vitrine';
import FiltroBusca from '../components/FiltroBusca';
import './Home.css';

function Home() {
  const { produtos, carregando, erro } = useProdutos();
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  // Extrai categorias únicas da lista de produtos
  const categorias = useMemo(() => {
    const unicas = [...new Set(produtos.map((p) => p.category))];
    return unicas.sort();
  }, [produtos]);

  // Filtra produtos por busca e categoria
  const produtosFiltrados = useMemo(() => {
    return produtos.filter((p) => {
      const buscaOk = p.title.toLowerCase().includes(busca.toLowerCase());
      const categoriaOk = categoriaSelecionada === '' || p.category === categoriaSelecionada;
      return buscaOk && categoriaOk;
    });
  }, [produtos, busca, categoriaSelecionada]);

  function handleLimparFiltros() {
    setBusca('');
    setCategoriaSelecionada('');
  }

  const temFiltroAtivo = busca !== '' || categoriaSelecionada !== '';

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__conteudo">
          <span className="hero__eyebrow">⚡ Nova coleção disponível</span>
          <h1 className="hero__titulo">
            Periféricos que <span className="hero__titulo-destaque">elevam seu setup</span>
          </h1>
          <p className="hero__descricao">
            Os melhores equipamentos tech com entrega rápida e frete grátis selecionado.
          </p>
          <div className="hero__acoes">
            <a href="#catalogo" className="hero__btn-cta">Ver catálogo</a>
            <a href="#catalogo" className="hero__btn-secundario">Ofertas do dia →</a>
          </div>
        </div>
        <div className="hero__ornamento" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        {[
          { valor: '10k+', label: 'Clientes satisfeitos' },
          { valor: '500+', label: 'Produtos no catálogo' },
          { valor: '4.9★', label: 'Avaliação média' },
          { valor: '48h', label: 'Entrega expressa' },
        ].map((stat) => (
          <div key={stat.label} className="stats__item">
            <span className="stats__valor">{stat.valor}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Catálogo com filtros */}
      <div id="catalogo">
        <FiltroBusca
          busca={busca}
          onBuscaChange={setBusca}
          categorias={categorias}
          categoriaSelecionada={categoriaSelecionada}
          onCategoriaChange={setCategoriaSelecionada}
          onLimpar={handleLimparFiltros}
          temFiltroAtivo={temFiltroAtivo}
          totalResultados={produtosFiltrados.length}
          carregando={carregando}
        />

        <Vitrine
          produtos={produtosFiltrados}
          carregando={carregando}
          erro={erro}
          temFiltroAtivo={temFiltroAtivo}
          onLimparFiltros={handleLimparFiltros}
        />
      </div>
    </div>
  );
}

export default Home;
