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

2. Instale as dependências:
```bash
# Com Yarn
yarn install

# Com npm
npm install
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

### Testes E2E (Playwright)

Para rodar os testes E2E, use o comando:
   ```bash
   # Com Yarn
   yarn test:e2e

   # Com npm
   npm run test:e2e
   ```

## Funcionalidades

- Funcionalidades serão implantadas nas próximas iterações

## Documentação

[Documentação](https://github.com/bomday/comedoria-cin-es/tree/main/public/docs)

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
