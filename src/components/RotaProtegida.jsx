import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RotaProtegida({ children }) {
  const { logado } = useAuth();
  const location = useLocation();

  if (!logado) {
    // Guarda a rota original para redirecionar depois do login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RotaProtegida;
