# Comedoria CIn

[![Status](https://img.shields.io/badge/status-active-success)]()
![GitHub Issues Opened](https://img.shields.io/github/issues/bomday/comedoria-cin-es?color=green)
![GitHub Issues Closed](https://img.shields.io/github/issues-closed/bomday/comedoria-cin-es?color=green)
![GitHub Pull Requests Opened](https://img.shields.io/github/issues-pr/bomday/comedoria-cin-es?color=green)
![GitHub Pull Requests Closed](https://img.shields.io/github/issues-pr-closed/bomday/comedoria-cin-es?color=green)
![GitHub Commits](https://img.shields.io/github/commit-activity/t/bomday/comedoria-cin-es/main?color=green)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

> Este projeto é uma aplicação full-stack usando Next.js com autenticação, estilo moderno e integração de banco de dados na nuvem. Ele foi criado com o objetivo de praticar os conceitos aprendidos na disciplina de Engenharia de Software, utilizando as melhores práticas de desenvolvimento e um conjunto de ferramentas que promovem uma experiência de desenvolvimento eficiente e de alta qualidade.

## Descrição

Observando a realidade dos alunos do CIN, que contam com poucas opções de alimentação nas proximidades do centro, surgiu um serviço, por iniciativa de alunos da comunidade, com a ideia de venda de salgados nas proximidades. 
Sendo um serviço que atende a diversos alunos surgiu a necessidade da criação de um sistema, desenvolvido com o objetivo de melhorar a qualidade e a experiência dos usuários na compra e venda de salgados, assim como a organização de informações, divisão e especificação de todo o processo de venda e de reservas. 

## Início Rápido

Essas instruções fornecerão uma cópia do projeto instalada e funcionando na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

- Node.js >= 16.x
- Yarn ou npm
- Conta no MongoDB Atlas
- Conta no Auth0

### Instalação

1. Clone este repositório:
```bash
git clone https://github.com/bomday/comedoria-cin-es.git
```

## Instale as dependências 

**Iniciar npm:**

```bash
npm i
```

**Iniciar Tailwind:**

```bash
npm install tailwindcss postcss autoprefixer
```

**Iniciar jest:**

```bash
npm install --save-dev jest
```

**Iniciar componentes react:**

```bash
npm install react react-dom @types/react @types/react-dom
```

**Iniciar mongoose (mongodb):**

```bash
npm install mongoose
```

**Iniciar types/mongoose:**

```bash
npm install --save-dev @types/mongoose
```

**Iniciar NextAuth:**

```bash
npm install next-auth
npm install mongodb-auth
```

**Iniciar bcryptjs**:

```bash
npm install bcryptjs
npm install --save-dev @types/bcryptjs
```

**Iniciar radix**:

```bash
npm install @radix-ui/react-dialog
npm install @radix-ui/react-avatar
npm install @radix-ui/react-popover
npm install @radix-ui/react-scroll-area
npm install @radix-ui/react-select
npm install @radix-ui/react-alert-dialog
```

3. Configure as variáveis de ambiente. Crie um arquivo .env.local na raiz do projeto com o seguinte conteúdo:
```bash
# Auth0
AUTH0_CLIENT_ID=<SEU_CLIENT_ID>
AUTH0_CLIENT_SECRET=<SEU_CLIENT_SECRET>
AUTH0_DOMAIN=<SEU_DOMÍNIO>

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<UMA_SECRET_QUALQUER>

# MongoDB Atlas
MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
```

4. Rodando o projeto localmente:
```bash
# Com Yarn
yarn dev

# Com npm
npm run dev
```

**O projeto estará disponível em `http://localhost:3000`**

## Configuração do ESLint e Prettier

Para garantir a consistência de código, o projeto utiliza o ESLint e o Prettier. Siga os passos abaixo para configurar:

1. Instale as dependências de desenvolvimento:
   ```bash
   # Com Yarn
   yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

   # Com npm
   npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
   ```

2. Crie o arquivo de configuração `.eslintrc.json` na raiz do projeto:
   ```json
   {
     "extends": [
       "next/core-web-vitals",
       "plugin:prettier/recommended"
     ],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": ["error"],
       "react/react-in-jsx-scope": "off"
     }
   }
   ```

3. Crie o arquivo de configuração do Prettier `.prettierrc` na raiz do projeto:
   ```json
   {
     "semi": true,
     "singleQuote": true,
     "trailingComma": "es5"
   }
   ```

## Testes

### Testes Unitários (Jest)

Para executar os testes unitários, utilize o comando:
   ```bash
   # Com Yarn
   yarn test

   # Com npm
   npm run test
   ```

## Funcionalidades

### Cliente:
- Criar conta
- Visualizar estoque
- Fazer reserva
- Visualizar estado da reserva
- Visualizar histórico de reserva
- Cancelar reserva

### Funcionário:
- Visualizar estoque

### Gerente:
- Visualizar página de estatísticas
- Gerar pdf das estatísticas

## Documentação

[Documentação](https://github.com/bomday/comedoria-cin-es/tree/main/public/docs)
[Escopo do Projeto](https://www.notion.so/Escopo-do-Projeto-c76e8634e3e040cfbbf329999acf87a0?pvs=25)
[Project Model Canvas](https://www.notion.so/Project-Model-Canvas-1040dc9cc0cb8057a835fc8db1bfba7c?pvs=25)
[Documentação da API](https://documenter.getpostman.com/view/37952465/2sAXxMfta2) 
[Protótipo do Figma](https://www.figma.com/design/mW7bT1aESdkvHBXoUL1Qh7/Comedoria-CIn?node-id=1-2&node-type=canvas&t=fADzYU2wza9KJt7b-0) 
[Documentação do Next.js]
[Documentação do Tailwindcss](https://tailwindcss.com/docs/installation)
	
## Tecnologias Utilizadas

Estas são as principais tecnologias utilizadas no desenvolvimento do projeto:

| Ferramenta| Descrição| Uso |
| --- | --- | --- |
| `Next.js` | Framework React para aplicações web com renderização no servidor (SSR) e geração estática. | Usado para construção da interface de usuário, permitindo renderização otimizada e navegação entre páginas.|
| `React.js` | Biblioteca para criação de interfaces web reativas e baseadas em componentização. | Usado para  criar componentes reutilizáveis e interativos para as páginas do webapp. |
| `Node.js` | Ambiente de execução JavaScript server-side, construído sobre o motor V8 do Chrome. | Usado para rodar o servidor do Next.js, facilitando a construção de aplicações escaláveis e performáticas. |
| `MongoDB Atlas` | Banco de dados NoSQL em nuvem altamente escalável.                                           | Armazena dados de usuários, produtos, reservas e vendas com alta disponibilidade e flexibilidade.|
| `Auth0` | Plataforma de autenticação e autorização segura. | Gerencia a autenticação dos usuários (clientes, funcionários e gerentes) e protege o acesso ao sistema. |
| `NextAuth` | Biblioteca de autenticação para Next.js. | Integra a autenticação com o Auth0 de forma simples e segura, gerenciando sessões de login. |
| `ESLint` | Ferramenta de linting para identificar e corrigir problemas no código JavaScript.            | Ajuda a manter o código limpo e padronizado, prevenindo erros durante o desenvolvimento. |
| `Prettier` | Formatador de código opinativo para garantir consistência no estilo de escrita do código. | Automatiza o estilo de código para que ele seja consistente em todo o projeto. |
| `Jest` | Framework de testes em JavaScript para validação de comportamento de código. | Utilizado para a criação de testes unitários, garantindo a qualidade e a correção das funcionalidades. |
| `Git` | Sistema de controle de versão distribuído amplamente utilizado. | Gerencia o histórico de versões do código e facilita o trabalho colaborativo entre desenvolvedores. |
| `GitHub` | Plataforma de hospedagem de código-fonte com controle de versão usando Git. | Hospeda o repositório do projeto e facilita a revisão e colaboração no desenvolvimento. |

## Estrutura
```
src
│
├───app                                   -----> Arquivos de Frontend e Backend
│   │   ├───globals.css                   -----> Estilos gerais
│   │   ├───layout.tsx                    -----> Layout principal da aplicação
│   │   ├───page.tsx                      -----> Página inicial da aplicação
│   │   └───provider.tsx                  -----> Context Provider para estados globais
│   │
│   ├───(errors)                          -----> Gerenciamento de erros
│   │   ├───authentication-error          -----> Componente para erros de autenticação
│   │   │       └───authentication-error.tsx -----> Implementação do componente
│   │   └───loading                       -----> Componente de loading
│   │           └───loading.tsx                -----> Implementação do componente de loading
│   │
│   ├───actions                            -----> Ações executáveis
│   │       └───register.ts                -----> Função de registro de clientes
│   │
│   ├───api                                -----> Rotas da API para interação com o backend
│   │   ├───auth                           -----> Gerenciamento de autenticação
│   │   │       └───[...nextauth]          -----> Roteamento dinâmico para autenticação
│   │   │           └───route.ts            -----> Implementação da rota de autenticação
│   │   ├───customer                       -----> Rota para gerenciar clientes
│   │   │       └───route.ts                -----> Implementação da rota de clientes
│   │   ├───inventory                      -----> Rota para gerenciar inventário
│   │   │       └───route.ts                -----> Implementação da rota de inventário
│   │   ├───reservation                    -----> Rota para gerenciar reservas
│   │   │       └───route.ts                -----> Implementação da rota de reservas
│   │   ├───sale                           -----> Rota para gerenciar vendas
│   │   │       └───route.ts                -----> Implementação da rota de vendas
│   │   └───staff                          -----> Rota para gerenciar funcionários
│   │           └───route.ts                -----> Implementação da rota de funcionários
│   │
│   ├───assets                             -----> Recursos estáticos da aplicação
│   │   └───index.tsx                      -----> Exportação dos ativos
│   │   └───images                         -----> Imagens utilizadas na aplicação
│   │           ├───coxinhaBanner.png      -----> Imagem do banner de coxinhas
│   │           ├───logo.svg                -----> Logotipo da aplicação
│   │           ├───logo_comedoria_branca.png -----> Logotipo branco da Comedoria
│   │           ├───logo_comedoria_preta.png -----> Logotipo preto da Comedoria
│   │           ├───logo_icon.png          -----> Ícone da aplicação
│   │           ├───logo_icon_branco.png    -----> Ícone branco da aplicação
│   │           ├───price-banner-image.svg  -----> Imagem do banner de preço
│   │           ├───priceBanner.svg        -----> SVG do banner de preço
│   │           ├───produtos.png           -----> Imagem de produtos
│   │           ├───student.png            -----> Imagem de estudante
│   │           └───whatsappBanner.png     -----> Imagem do banner do WhatsApp
│   │           └───whiteLogo.svg          -----> Logotipo branco em SVG
│   │
│   ├───customer-account                   -----> Página de conta do cliente
│   │       └───page.tsx                   -----> Implementação da página da conta
│   │       └───sections                   -----> Seções da página da conta do cliente
│   │           └───buttonGroup            -----> Grupo de botões na conta do cliente
│   │               └───page.tsx           -----> Implementação da seção de botões
│   │
│   ├───customer-login                     -----> Página de login do cliente
│   │       └───page.tsx                   -----> Implementação da página de login
│   │       └───sections                   -----> Seções da página de login
│   │           └───forms                  -----> Formulários de login
│   │               └───forms.tsx           -----> Implementação do formulário de login
│   │
│   ├───customer-reservations              -----> Página de reservas do cliente
│   │       └───page.tsx                   -----> Implementação da página de reservas
│   │       └───sections                   -----> Seções da página de reservas
│   │           ├───ActiveReservations      -----> Seção de reservas ativas
│   │           │       └───activeReservations.tsx -----> Implementação da seção de reservas ativas
│   │           └───ReservationHistory      -----> Seção de histórico de reservas
│   │                   └───reservationHistory.tsx -----> Implementação da seção de histórico de reservas
│   │
│   ├───inventory                           -----> Página de gerenciamento de inventário
│   │       └───page.tsx                   -----> Implementação da página de inventário
│   │       └───sections                   -----> Seções da página de inventário
│   │           └───forms                  -----> Formulários para gerenciamento de inventário
│   │               └───forms.tsx           -----> Implementação do formulário de inventário
│   │
│   ├───landing-page                        -----> Página inicial da aplicação
│   │       └───page.tsx                   -----> Implementação da página de boas-vindas
│   │       └───sections                   -----> Seções da página inicial
│   │           └───index.tsx              -----> Exportação das seções da página inicial
│   │           ├───banner                 -----> Seção de banner
│   │           │       └───banner.tsx      -----> Implementação do componente de banner
│   │           ├───contact                -----> Seção de contato
│   │           │       └───contact.tsx     -----> Implementação do componente de contato
│   │           ├───mission                -----> Seção de missão
│   │           │       └───mission.tsx     -----> Implementação do componente de missão
│   │           └───process                -----> Seção de processo
│   │                   └───process.tsx     -----> Implementação do componente de processo
│   │
│   ├───management                         -----> Páginas de gerenciamento
│   │   ├───customers                      -----> Página de gerenciamento de clientes
│   │   │       └───page.tsx               -----> Implementação da página de clientes
│   │   │       ├───customer-item          -----> Item de cliente individual
│   │   │       │       └───customerItem.tsx -----> Implementação do item de cliente
│   │   │       ├───customer-list          -----> Lista de clientes
│   │   │       │       └───customerList.tsx -----> Implementação da lista de clientes
│   │   │       └───search-bar             -----> Barra de pesquisa para clientes
│   │   │               └───searchBar.tsx   -----> Implementação da barra de pesquisa
│   │   └───dashboard                      -----> Página de dashboard
│   │           └───page.tsx               -----> Implementação da página de dashboard
│   │           ├───custo                  -----> Seção de custo
│   │           │       └───custo.tsx       -----> Implementação da seção de custo
│   │           ├───lucro                  -----> Seção de lucro
│   │           │       └───lucro.tsx       -----> Implementação da seção de lucro
│   │           ├───most-sale              -----> Seção de produtos mais vendidos
│   │           │       └───most-sale.tsx    -----> Implementação da seção de produtos mais vendidos
│   │           ├───receita                -----> Seção de receita
│   │           │       └───receita.tsx     -----> Implementação da seção de receita
│   │           └───sales-chart             -----> Seção de gráfico de vendas
│   │                   └───sales-chart.tsx  -----> Implementação da seção de gráfico de vendas

```


## Como Contribuir

Contribuições são sempre bem-vindas, veja como você pode ajudar:
1. Clone o repositório e crie sua branch a partir de `main`.
2. `git checkout -b minha-nova-feature`
3. Faça suas alterações e commit.
4. Envie para a branch.
5. Abra um Pull Request.

## Créditos

- Beatriz Helena
- Celeste Pereira
- Dayane Lima
- Gabriel Marvin
- Maria Antonia
- Rafael Ayres

## FAQ

**Pergunta 1:** Como faço para configurar o ambiente?

**Resposta:** Siga as instruções de instalação e qualquer etapa de configuração adicional indicada acima.

## Estado do Projeto

Este projeto está em desenvolvimento ativo. Você pode esperar mudanças frequentes e atualizações.

---
