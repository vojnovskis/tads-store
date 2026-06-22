import './Botao.css';

function Botao({ children, variante = 'primario', onClick, disabled = false, tipo = 'button' }) {
  return (
    <button
      type={tipo}
      className={`botao botao--${variante}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Botao;
