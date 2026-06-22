import './Selo.css';

function Selo({ tipo, children }) {
  return (
    <span className={`selo selo--${tipo}`}>
      {children}
    </span>
  );
}

export default Selo;
