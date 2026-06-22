import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import { CarrinhoProvider } from './context/CarrinhoContext';
import { AuthProvider } from './context/AuthContext';

import Layout from './components/Layout';
import RotaProtegida from './components/RotaProtegida';

import Home from './pages/Home';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';
import MinhaConta from './pages/MinhaConta';
import NaoEncontrado from './pages/NaoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CarrinhoProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produto/:id" element={<ProdutoDetalhe />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/minha-conta"
                element={
                  <RotaProtegida>
                    <MinhaConta />
                  </RotaProtegida>
                }
              />
              <Route path="*" element={<NaoEncontrado />} />
            </Routes>
          </Layout>
        </CarrinhoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
