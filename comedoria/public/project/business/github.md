# Organização GitHub

## 1) Nome da Branch

**Padrão:**

[tipo-de-commit]/[super-resumo-da-feature]

**Exemplo:**

```
git checkout -b feat/create-post-api
```


## 2) Mensagens de Commit
**Modelo:** 

tipo: descriçao

**Tipos de commits:**

1. **feat:** Um novo recurso para a aplicação, e não precisa ser algo grande, mas apenas algo que não existia antes e que a pessoa final irá acessar.
2. **fix:** Correções de bugs
3. **docs:** Alterações em arquivos relacionados à documentações
4. **style:** Alterações de estilização, formatação etc
5. **refactor:** Um codigo de refatoração, ou seja, que foi alterado, que tem uma mudança transparente para o usuário final, porém uma mudança real para a aplicação
6. **perf:** Alterações relacionadas à performance
7. **test:** Criação ou modificação de testes
8. **chore:** Alterações em arquivos de configuração, build, distribuição, CI, ou qualquer outra coisa que não envolva diretamente o código da aplicação para o usuário final

**Exemplo:**

```
git commit -m "feat: creating hook to integrate with posts API"
```

## 3) Título na Pull Request

**Padrão:**

tipo(escopo): descriçao

**Exemplo:**

```
feat(posts): creating hook to integrate with posts API
```

**OBS.:** Esse título serve para ter uma ideia do que foi feito e onde foi feito

## 4) Descrição na Pull Request


### Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Chore (documentation, packages, or tests updates, nothing that affect the final user directly)
- [ ] Release (new version of the application - only for production)

### Description

...

### Tasks

- Change 1
- Change 2
- ...


## 5) Assignees, Reviewers, Labels e Commits Colaborativos

- **Assignees:** Um ou mais responsáveis pelo pull request para que em caso de problemas, seja fácil achar quem tem mais contexto no time;
- **Reviewers:** Um ou mais responsáveis para revisar Pull Request;
- **Labels:** uma ou mais labels que fazem sentido para aquele recurso (seguindo tipos de commits);
- **Commits Colaborativos:** 
```
git commit -m "doc: api documentation" 

Co-authored-by: Name <email>
Co-authored-by: Name <email>
Co-authored-by: Name <email>
```

## 6) Realizar Pull Request

Já com o projeto funcionando localmente, siga os seguintes passos: 

```
git pull (deixar repositório local atualizado)
git checkout -b "nome-da-branch" (criar branch para subir mudanças)
git add . (adicionar as mudanças na branch criada)
git commit -m "mensagem-commit"
git push -u origin "nome-da-branch"
```