import { useState, useEffect } from 'react';

const API_URL = 'https://dummyjson.com/products?limit=20&skip=0&select=id,title,price,thumbnail,category,rating,stock,discountPercentage,description';

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function buscarProdutos() {
      try {
        setCarregando(true);
        setErro(null);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
        const data = await res.json();
        if (!cancelado) setProdutos(data.products);
      } catch (err) {
        if (!cancelado) setErro(err.message || 'Falha ao carregar produtos.');
      } finally {
        if (!cancelado) setCarregando(false);
      }
    }

    buscarProdutos();
    return () => { cancelado = true; };
  }, []);

  return { produtos, carregando, erro };
}
