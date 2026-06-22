import './Rodape.css';

function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="rodape__inner">
        <div className="rodape__marca">
          <span className="rodape__logo">⚡ TADS <strong>Store</strong></span>
          <p className="rodape__slogan">Tecnologia que potencializa sua performance.</p>
        </div>

        <div className="rodape__links">
          <div className="rodape__coluna">
            <h4 className="rodape__titulo">Loja</h4>
            <ul>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Ofertas</a></li>
              <li><a href="#">Lançamentos</a></li>
            </ul>
          </div>
          <div className="rodape__coluna">
            <h4 className="rodape__titulo">Suporte</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Rastrear Pedido</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rodape__base">
        <p>© {ano} TADS Store — Projeto acadêmico React</p>
        <p className="rodape__direitos">Desenvolvido com React + Vite</p>
      </div>
    </footer>
  );
}

export default Rodape;
