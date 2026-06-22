# ⚡ TADS Store

> E-commerce de periféricos e tecnologia — projeto acadêmico completo com React + Vite, desenvolvido em 4 etapas progressivas.

## 🛠 Stack

- **React 18** — componentização, hooks, context API
- **Vite** — bundler ultrarrápido
- **React Router DOM v7** — SPA com roteamento client-side
- **CSS customizado** — design tokens próprios, sem frameworks externos
- **DummyJSON API** — produtos reais via fetch

---

## 📁 Estrutura de pastas

```
src/
├── components/
│   ├── Botao            # Polimórfico: primario | secundario | fantasma
│   ├── Cabecalho        # Header sticky + glassmorphism + badge carrinho + auth
│   ├── Layout           # Wrapper com children (Header + Main + Footer)
│   ├── ProdutoCard      # Card com renderização condicional + link de rota
│   ├── Rodape           # Footer com colunas de links
│   ├── RotaProtegida    # HOC que redireciona usuário não autenticado
│   ├── Selo             # Badge reutilizável (frete, desconto, estoque...)
│   └── Vitrine          # Grid responsivo + skeleton loading + estado de erro
│
├── context/
│   ├── AuthContext      # logado, usuario, entrar(), sair()
│   └── CarrinhoContext  # itens, adicionarItem, removerItem, alterarQuantidade...
│
├── hooks/
│   ├── useProdutos      # Busca lista de produtos na API (loading/error/data)
│   └── useProduto       # Busca produto único por id
│
├── pages/
│   ├── Home             # Hero + stats + vitrine com API real
│   ├── ProdutoDetalhe   # Galeria, preço, botão carrinho, breadcrumb
│   ├── Carrinho         # Lista itens, quantidade, frete, total
│   ├── Login            # Form controlado, validação, credenciais de teste
│   ├── MinhaConta       # Rota protegida, resumo carrinho, perfil
│   └── NaoEncontrado    # Página 404 estilizada
│
└── styles/
    └── global.css       # Design tokens (CSS custom properties) e reset
```

---

## 🚀 Como rodar

```bash
git clone https://github.com/seu-usuario/tads-store.git
cd tads-store
npm install
npm run dev
# Acesse: http://localhost:5173
```

---

## 🔐 Login de teste

| Campo | Valor         |
|-------|---------------|
| Email | aluno@tads.com |
| Senha | tads2025       |

> Na tela de login há um botão "Preencher automaticamente" para facilitar.

---

## 🗺 Rotas disponíveis

| Rota           | Descrição                  | Protegida |
|----------------|----------------------------|-----------|
| `/`            | Catálogo de produtos        | Não       |
| `/produto/:id` | Detalhe do produto          | Não       |
| `/carrinho`    | Carrinho de compras         | Não       |
| `/login`       | Tela de autenticação        | Não       |
| `/minha-conta` | Área do usuário             | ✅ Sim    |
| `/*`           | Página 404                  | Não       |

---

## 📋 Etapas implementadas

| Etapa | Status | Conceitos |
|-------|--------|-----------|
| 1 | ✅ | Componentização, props, `.map()`, renderização condicional, CSS próprio |
| 2 | ✅ | `useState`, `useEffect`, fetch API, custom hooks, CarrinhoContext |
| 3 | ✅ | React Router v7, BrowserRouter, `useParams`, `useNavigate`, página de carrinho |
| 4 | ✅ | AuthContext, form controlado, rota protegida, header dinâmico, logout |

---

Desenvolvido com React + Vite · Projeto TADS
