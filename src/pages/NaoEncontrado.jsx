import { Link } from 'react-router-dom';
import Botao from '../components/Botao';
import './NaoEncontrado.css';

function NaoEncontrado() {
  return (
    <div className="nao-encontrado">
      <div className="nao-encontrado__orb" aria-hidden="true" />
      <p className="nao-encontrado__codigo">404</p>
      <h1 className="nao-encontrado__titulo">Página não encontrada</h1>
      <p className="nao-encontrado__msg">
        O endereço que você acessou não existe ou foi removido.
      </p>
      <Link to="/">
        <Botao variante="primario">← Voltar à loja</Botao>
      </Link>
    </div>
  );
}

export default NaoEncontrado;
