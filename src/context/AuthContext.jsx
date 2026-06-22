import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

// Usuário de teste fixo
const USUARIO_TESTE = {
  email: 'aluno@tads.com',
  senha: 'tads2025',
  nome: 'Aluno TADS',
  avatar: 'AT',
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const entrar = useCallback(async (email, senha) => {
    setCarregando(true);
    setErro('');

    // Simula latência de rede
    await new Promise((r) => setTimeout(r, 800));

    if (email === USUARIO_TESTE.email && senha === USUARIO_TESTE.senha) {
      setUsuario({ email: USUARIO_TESTE.email, nome: USUARIO_TESTE.nome, avatar: USUARIO_TESTE.avatar });
      setCarregando(false);
      return true;
    }

    setErro('E-mail ou senha incorretos.');
    setCarregando(false);
    return false;
  }, []);

  const sair = useCallback(() => {
    setUsuario(null);
    setErro('');
  }, []);

  const logado = Boolean(usuario);

  return (
    <AuthContext.Provider value={{ usuario, logado, entrar, sair, erro, carregando }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return ctx;
}
