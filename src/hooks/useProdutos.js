import { useState, useEffect } from 'react';
import produtos from '../data/produtos';

export function useProdutos() {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Simula carregamento para manter o comportamento de loading/skeleton
    const timer = setTimeout(() => setCarregando(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return { produtos, carregando, erro };
}
