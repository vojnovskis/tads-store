import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Cabecalho />
      <main className="layout__main">
        {children}
      </main>
      <Rodape />
    </div>
  );
}

export default Layout;
