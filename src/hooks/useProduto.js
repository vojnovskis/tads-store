import { useState, useEffect } from 'react';

export function useProduto(id) {
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelado = false;

    async function buscar() {
      try {
        setCarregando(true);
        setErro(null);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error(`Produto não encontrado (${res.status})`);
        const data = await res.json();
        if (!cancelado) setProduto(data);
      } catch (err) {
        if (!cancelado) setErro(err.message);
      } finally {
        if (!cancelado) setCarregando(false);
      }
    }

    buscar();
    return () => { cancelado = true; };
  }, [id]);

  return { produto, carregando, erro };
}
