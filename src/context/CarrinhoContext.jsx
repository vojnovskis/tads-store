import { createContext, useContext, useState, useCallback } from 'react';

const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionarItem = useCallback((produto) => {
    setItens((prev) => {
      const existente = prev.find((i) => i.id === produto.id);
      if (existente) {
        return prev.map((i) =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }, []);

  const removerItem = useCallback((id) => {
    setItens((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const alterarQuantidade = useCallback((id, quantidade) => {
    if (quantidade < 1) return;
    setItens((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantidade } : i))
    );
  }, []);

  const limparCarrinho = useCallback(() => setItens([]), []);

  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);
  const totalPreco = itens.reduce((acc, i) => acc + i.price * i.quantidade, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        alterarQuantidade,
        limparCarrinho,
        totalItens,
        totalPreco,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const ctx = useContext(CarrinhoContext);
  if (!ctx) throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider');
  return ctx;
}
