# ⚡ TADS Store

E-commerce de periféricos e tecnologia desenvolvido com React + Vite como projeto acadêmico da disciplina de Desenvolvimento Web.

🌐 **Deploy online:** https://tads-store-one.vercel.app/
📦 **Repositório:** https://github.com/vojnovskis/tads-store

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/vojnovskis/tads-store.git

# 2. Entre na pasta
cd tads-store

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173
```

---

## 🔐 Usuário e senha de teste

| Campo | Valor |
|-------|-------|
| E-mail | aluno@tads.com |
| Senha | tads2025 |

---

## ✅ Funcionalidades implementadas

### Etapa 1 — Componentização
- Componente `Layout` com `children` (Header + Main + Footer persistentes)
- Componente `Cabecalho` com navegação e badge do carrinho
- Componente `Rodape` com links organizados em colunas
- Componente `Vitrine` com grid responsivo de produtos
- Componente `ProdutoCard` reutilizável com props
- Componente `Botao` polimórfico (variantes: primario, secundario, fantasma)
- Componente `Selo` para badges (frete grátis, desconto, estoque, categoria)
- Renderização condicional (frete grátis, pouco estoque, esgotado, desconto)
- Lista de produtos renderizada com `.map()`

### Etapa 2 — Estado, Hooks e API
- Hook customizado `useProdutos` com `useState` e `useEffect`
- Hook customizado `useProduto` para busca de produto por ID
- Estados de `carregando` (skeleton animado) e `erro`
- **Busca por nome** em tempo real
- **Filtro por categoria** com botões interativos
- Estado vazio quando nenhum produto é encontrado nos filtros
- 20 produtos em português com dados completos

### Etapa 3 — Navegação SPA
- React Router DOM configurado com `BrowserRouter`
- Rota `/` — catálogo de produtos
- Rota `/produto/:id` — detalhe do produto com `useParams`
- Rota `/carrinho` — página do carrinho de compras
- Rota `/login` — tela de autenticação
- Rota `/minha-conta` — área protegida
- Rota `*` — página 404 personalizada
- Navegação sem recarregar a página (`<Link>`)
- Navegação programática com `useNavigate`
- Breadcrumb na página de detalhe

### Etapa 4 — Autenticação
- `AuthContext` com `logado`, `usuario`, `entrar()` e `sair()`
- Tela de login com formulário controlado (`useState`)
- Validação de credenciais com feedback de erro
- Estado de carregamento durante o login
- Toggle para mostrar/ocultar senha
- `RotaProtegida` — redireciona para `/login` se não autenticado
- Header dinâmico: exibe "Entrar" ou avatar + nome + botão "Sair"
- Logout funcional que limpa o estado global
- Página `/minha-conta` protegida com resumo do carrinho e perfil

### Bônus
- 🌐 **Deploy no Vercel** — projeto publicado online
- 🛒 **Carrinho de compras completo** — adicionar, remover, alterar quantidade, calcular total e frete
- 🎨 **Design próprio** — identidade visual escura com paleta roxa, tipografia Syne + Inter, efeitos glow

---

## 🗂 Estrutura do projeto

```
src/
├── components/
│   ├── Botao            # Botão reutilizável com variantes
│   ├── Cabecalho        # Header sticky com glassmorphism
│   ├── FiltroBusca      # Busca e filtro por categoria
│   ├── Layout           # Wrapper com Header + Main + Footer
│   ├── ProdutoCard      # Card de produto clicável
│   ├── Rodape           # Footer
│   ├── RotaProtegida    # HOC de autenticação
│   ├── Selo             # Badge/tag reutilizável
│   └── Vitrine          # Grid de produtos
├── context/
│   ├── AuthContext      # Estado global de autenticação
│   └── CarrinhoContext  # Estado global do carrinho
├── data/
│   └── produtos.js      # 20 produtos em português
├── hooks/
│   ├── useProduto       # Busca produto por ID
│   └── useProdutos      # Lista todos os produtos
├── pages/
│   ├── Carrinho         # Página do carrinho
│   ├── Home             # Página inicial
│   ├── Login            # Tela de login
│   ├── MinhaConta       # Área protegida
│   ├── NaoEncontrado    # Página 404
│   └── ProdutoDetalhe   # Detalhe do produto
└── styles/
    └── global.css       # Design tokens e reset
```

---

## 🛠 Tecnologias utilizadas

- **React 18** — biblioteca de UI
- **Vite** — bundler e servidor de desenvolvimento
- **React Router DOM v7** — roteamento SPA
- **CSS customizado** — sem frameworks, design tokens próprios
- **Google Fonts** — Syne (display) + Inter (corpo)
- **Vercel** — deploy e hospedagem gratuita

---

## 📸 Telas principais

- Catálogo com busca e filtro por categoria
- Página de detalhe do produto com galeria e botão de carrinho
- Carrinho com controle de quantidade e cálculo de frete
- Tela de login com formulário controlado
- Área protegida `/minha-conta` com perfil e resumo do carrinho
- Página 404 personalizada

