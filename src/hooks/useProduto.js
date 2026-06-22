import { useState, useEffect } from 'react';
import produtos from '../data/produtos';

export function useProduto(id) {
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!id) return;

    setCarregando(true);
    setErro(null);

    const timer = setTimeout(() => {
      const encontrado = produtos.find((p) => p.id === Number(id));
      if (encontrado) {
        setProduto(encontrado);
      } else {
        setErro('Produto não encontrado.');
      }
      setCarregando(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [id]);

  return { produto, carregando, erro };
}
