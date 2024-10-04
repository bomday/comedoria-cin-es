Documentação da API - Comedoria
# Documentação da API - Comedoria

## 1. Propósito e Funcionalidade

### Descrição Geral:
- **Propósito**: Nossa API tem o objetivo de realizar cadastros e requisições ao banco de dados.
- **Funcionalidade**: Com a API Comedoria será possível para o cliente se cadastrar e visualizar ou reservar lanches. Para os vendedores, será possível se cadastrar, visualizar ou reservar lanches e finalizar reservas feitas por clientes. Já o gerente será capaz de efetuar o que um vendedor faz além de criar relatórios a partir de dados coletados pela própria aplicação.

## 2. Especificação Técnica

- **URL Base**: `https://comedoriacin.com/v1`

### Endpoints

#### Exemplos de resposta para retorno 200

#### Endpoint: `/register`
- **Método Suportado**: `POST`
- **Descrição**: Realiza o cadastro de um novo usuário.
- **Parâmetros no Corpo da Requisição**:
  - `username` (Tipo: String, Obrigatório): Nome de usuário.
  - `password` (Tipo: String, Obrigatório): Senha do usuário.
  - `email` (Tipo: String, Obrigatório): E-mail do usuário.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON

- **Exemplo de Requisição:**
```http
POST /v1/register HTTP/1.1
Host: comedoriacin.com
Content-Type: application/json

{
  "name": "raquel brito",
  "password": "raquel1234",
  "email": "raquelbrito@gmail.com"
}
```

- **Exemplo de Resposta:**
```json
{
  "userId": 1,
  "name": "raquel brito",
  "email": "raquelbrito@gmail.com"
}
```

#### Endpoint: `/login`
- **Método Suportado**: `POST`
- **Descrição**: Realiza o login de um usuário e retorna um token de autenticação.
- **Parâmetros no Corpo de Requisição**:
  - `email` (Tipo: String, Obrigatório): E-mail do usuário.
  - `password` (Tipo: String, Obrigatório): Senha do usuário.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
POST /v1/login HTTP/1.1
Host: comedoriacin.com
Content-Type: application/json
{
  "username": "raquelbrito@gmail.com",
  "password": "raquel1234"
}

```




- **Exemplo de Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "expiresIn": 3600
}
```




#### Endpoint: `/logout`
- **Método Suportado**: `POST`
- **Descrição**: Realiza o logout do usuário invalidando o token de autenticação.
- **Parâmetros no Corpo da Requisição:**:
  - `token` (Tipo: String, Obrigatório): Token de autenticação a ser invalidado.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
POST /v1/logout HTTP/1.1
Host: comedoriacin.com
Content-Type: application/json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```




- **Exemplo de Resposta:**
```json
{
  "message": "Logout realizado com sucesso."
}
```




#### Endpoint: `/snacks`
- **Método Suportado**: `POST`
- **Descrição**: Adiciona um novo tipo de salgado ao sistema.
- **Parâmetros no Corpo da Requisição:**:
  - `name` (Tipo: String, Obrigatório): Nome do salgado.
  - `quantity` (Tipo: String, Obrigatório): Quantidade de salgados disponíveis.
  - `description` (Tipo: String, Opcional): Descrição do salgado.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
POST /snacks HTTP/1.1
Host: comedoriacin.com
Content-Type: application/json
Authorization: Bearer {token}

{
  "name": "Coxinha",
  "quantity": 13,
  "description": "Coxinha de frango com catupiry."
}
```




- **Exemplo de Resposta:**
```json
{
  "message": "Novo tipo de salgado adicionado com sucesso.",
  "snackId": 3
}
```




#### Endpoint: `/snacks`
- **Método Suportado**: `GET`
- **Descrição**: Visualiza todos os salgados registrados no sistema.
- **Parâmetros na URL ou Corpo da Requisição:**: Nenhum.
- **Formato de Dados**:
    - **Entrada**: Nenhum.
    - **Saída**: JSON
- **Exemplo de Requisição:**
```http
GET /v1/snacks HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```




- **Exemplo de Resposta:**
```json
{
  "snacks": [
    {
      "snackId": 1,
      "name": "Coxinha",
      "description": "Coxinha de frango com catupiry.",
      "quantity": 7
    },
    {
      "snackId": 2,
      "name": "Esfirra de Queijo",
      "description": "Esfirra de Queijo.",
      "quantity": 4
    }
  ]
}
```




#### Endpoint: `/snacks\{snackId}`
- **Método Suportado**: `DELETE`
- **Descrição**: Remove um salgado específico do sistema..
- **Parâmetros na URL**:
  - `snackId` (Tipo: Integer, Obrigatório): ID do salgado a ser removido.
- **Formato de Dados**:
    - **Entrada**: Nenhuma.
    - **Saída**: JSON
- **Exemplo de Requisição:**
```http
DELETE /v1/snacks/1 HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```




- **Exemplo de Resposta:**
```json
{
  "message": "Salgado removido com sucesso."
}
```




#### Endpoint: `/reservations`
- **Método Suportado**: `GET`
- **Descrição**: Obtém uma lista de todas as reservas.
- **Parâmetros na URL**:
  - `status` (Tipo: String, Opcional): Status da reserva.
- **Formato de Dados**:
    - **Entrada**: Nenhuma (parâmetros na URL).
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
GET /v1/reservations?status=confirmed HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```




- **Exemplo de Resposta:**
```json
[
  {
    "reservationId": 1,
    "status": "confirmed",
    "date": "2024-09-10",
    "time": "14:00",
    "snacks": [
      {
        "snackId": 101,
        "quantity": 2
      }
    ]
  }
]
```




#### Endpoint: `/reservations`
- **Método Suportado**: `POST`
- **Descrição**: Realiza uma reserva de salgados.
- **Parâmetros no Corpo da Requisição**:
  - `status` (Tipo: Integer, Obrigatório): ID do cliente.
  - `date` (Tipo: String, Obrigatório): Data da reserva.
  - `time` (Tipo: String, Obrigatório): Hora da reserva.
  - `snacks` (Tipo: Array de Objetos, Obrigatório): Lista de itens reservados, cada um contendo:
    - `snackId` (Tipo: Integer, Obrigatório): ID do tipo de salgado reservado.
    - `quantity` (Tipo: Integer, Obrigatório): Quantidade do tipo do salgado reservado.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
POST /reservations HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": 1,
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```




- **Exemplo de Resposta:**
```json
{
  "reservationId": 123,
  "status": "confirmed",
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```




#### Endpoint: `/reservas/{reservationID}`
- **Método Suportado**: `GET`
- **Descrição**: Visualiza uma reserva específica.
- **Parâmetros na URL**:
  - `reservationId` (Tipo: Integer, Obrigatório): ID da reserva.
- **Formato de Dados**:
    - **Entrada**: Nenhuma (parâmetros na URL).
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
GET /reservas/123 HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```
- **Exemplo de Resposta:**
```json
{
  "reservationId": 123,
  "status": "confirmed",
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```








#### Endpoint: `/reservas/{reservationID}`
- **Método Suportado**: `PUT`
- **Descrição**: Atualiza o status de uma reserva.
- **Parâmetros no Corpo da Requisição**:
  - `status` (Tipo: String, Obrigatório): Status da reserva.
  - `reservationId` (Tipo: Integer, Obrigatório): ID da reserva que está sendo atualizada.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
PUT /reservas/123 HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "completed"
}
```




- **Exemplo de Resposta:**
```json
{
  "reservationId": 123,
  "status": "completed",
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```




#### Endpoint: `/sales`
- **Método Suportado**: `POST`
- **Descrição**: Realiza o registro de uma venda.
- **Parâmetros no Corpo da Requisição**:
  - `date` (Tipo: String, Obrigatório): Data da venda.
  - `time` (Tipo: String, Obrigatório): Horário da venda.
  - `snacks` (Tipo: Array de Objetos, Obrigatório): Lista de itens vendidos, contendo:
    - `snackId` (Tipo: Integer, Obrigatório): ID do tipo de salgado vendido.
    - `quantity` (Tipo: Integer, Obrigatório): Quantidade do tipo do salgado vendido.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
POST /v1/sales HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```




- **Exemplo de Resposta:**
```json
{
  "saleId": 456,
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```


#### Endpoint: `/sales`
- **Método Suportado**: `GET`
- **Descrição**: Obtém o registro das vendas.
- **Parâmetros no Corpo da Requisição**:
   - `date` (Tipo: String, Obrigatório): Data da venda.
  - `time` (Tipo: String, Obrigatório): Horário da venda.
- **Formato de Dados**:
    - **Entrada**: Nenhum.
    - **Saída**: JSON


- **Exemplo de Requisição:**
```http
POST /v1/sales HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "saleId": 456,
  "date": "2024-09-10",
  "time": "14:00",
  "snacks": [
    {
      "snackId": 101,
      "quantity": 2
    }
  ]
}
```

#### Endpoint: `/inventory/update`
- **Método Suportado**: `PUT`
- **Descrição**: Atualiza a quantidade de um salgado no estoque, adicionando ou subtraindo da quantidade existente.
- **Parâmetros no Corpo da Requisição**:
  - `snackId` (Tipo: Integer, Obrigatório): ID do tipo de salgado.
  - `quantity` (Tipo: Integer, Obrigatório): Quantidade a ser adicionada ou subtraída (use números negativos para remover do estoque).
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
POST /v1/inventory/update HTTP/1.1
Host: comedoriacin.com
Content-Type: application/json

{
  "snackId": 1,
  "quantity": 10
}
```




- **Exemplo de Resposta:**
```json
{
  "message": "Estoque do salgado atualizado com sucesso.",
  "snackId": 1,
  "newQuantity": 50
}
```




#### Endpoint: `/employees`
- **Método Suportado**: `GET`
- **Descrição**: Obtém uma lista de todos os funcionários cadastrados.
- **Parâmetros na URL ou Corpo de Requisição**: Nenhum.
- **Formato de Dados**:
    - **Entrada**: Nenhum.
    - **Saída**: JSON




- **Exemplo de Requisição:**
```http
GET /v1/employees HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```




- **Exemplo de Resposta:**
```json
[
  {
    "employeeId": 1,
    "name": "Byun Baekhyun",
    "email": "byunbaekhyun@gmail.com"
  },
  {
    "employeeId": 2,
    "name": "Park Chanyeol",
    "email": "parkchanyeol@gmail.com"
  }
]
```




#### Endpoint: `/employees`
- **Método Suportado**: `POST`
- **Descrição**: Adiciona um novo funcionário ao sistema.
- **Parâmetros no Corpo da Requisição**:
  - `name` (Tipo: String, Obrigatório): Nome do funcionário.
  - `email` (Tipo: String, Obrigatório): E-mail do funcionário.
- **Formato de Dados**:
    - **Entrada**: JSON
    - **Saída**: JSON




- **Exemplo de Requisição:**
```json
POST /v1/employees HTTP/1.1
Host: comedoriacin.com
Content-Type: application/json
Authorization: Bearer {token}

{
  "name": "Oh Sehun",
  "email": "oh_sehun@gmail.com"
}
```




- **Exemplo de Resposta:**
```json
{
  "employeeId": 3,
  "name": "Oh Sehun",
  "email": "oh_sehun@gmail.com"
}
```




#### Endpoint: `/employees/{employeeId}`
- **Método Suportado**: `GET`
- **Descrição**: Obtém as informações de um funcionário específico.
- **Parâmetros na URL**:
  - `employeeId` (Tipo: Integer, Obrigatório): ID do funcionário que deseja visualizar.
- **Formato de Dados**:
    - **Entrada**: Nenhum.
    - **Saída**: JSON
- **Exemplo de Requisição:**
```http
GET /v1/employees/1 HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```




- **Exemplo de Resposta:**
```json
{
  "employeeId": 1,
  "name": "Byun Baekhyun",
  "email": "byunbaekhyun@gmail.com"
}
```




#### Endpoint: `/home`
- **Método Suportado**: `GET`
- **Descrição**: Retorna a página inicial do site para visualização por clientes e funcionários.
- **Parâmetros na URL**: Nenhum.
- **Formato de Dados**:
    - **Entrada**: Nenhuma (não há parâmetros na URL).
    - **Saída**: HTML ou JSON


---


- **Exemplo de Requisição:**
```http
GET /v1/home HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```


- **Exemplo de Resposta:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Plataforma</title>
</head>
<body>
    <header>
        <h1>Bem-vindo à Plataforma</h1>
    </header>
    <main>
        <section>
            <h2>Sobre Nós</h2>
            <p>Explore nossa plataforma para descobrir nossos serviços e funcionalidades.</p>
        </section>
        <section>
            <h2>Serviços</h2>
            <p>Veja os serviços que oferecemos para atender suas necessidades.</p>
        </section>
        <footer>
            <p>© 2024 Plataforma. Todos os direitos reservados.</p>
        </footer>
    </main>
</body>
</html>
```


#### Endpoint: `/account/delete`
- **Método Suportado**: `DELETE`
- **Descrição**: Permite que um cliente desfaça seu cadastro no site e seja removido do banco de clientes.
- **Parâmetros na URL**:
  - `userId` (Tipo: Integer, Obrigatório): ID do cliente que deseja excluir sua conta.
- **Formato de Dados**:
    - **Entrada**: Nenhuma (parâmetro passado na URL).
    - **Saída**: JSON


---


- **Exemplo de Requisição:**
```http
DELETE /v1/account/delete HTTP/1.1
Host: comedoriacin.com
Authorization: Bearer {token}
```


- **Exemplo de Resposta:**
```json
{
  "message": "Conta do cliente com ID 123 foi excluída com sucesso."
}


```
#### Endpoint: `/sales/{time}`
- **Método Suportado**: `GET`
- **Descrição**: Obtém os valores das vendas por turno.
- **Parâmetros na URL**:
  - `time` (Tipo: String, Obrigatório): Horário da venda.
- **Formato de Dados**:
    - **Entrada**: Nenhum.
    - **Saída**: JSON


- **Exemplo de Requisição:**
```http
GET /v1/sales/time HTTP/1.1
Host: example.com
Authorization: Bearer {token}
```
- **Exemplo de Resposta:**
```json
{
  "date": "2024-09-10",
  "reservations": {
    "total": 120,
    "details": [
      {
        "snackId": 101,
        "quantity": 50
      },
      {
        "snackId": 102,
        "quantity": 70
      }
    ]
  },
  "cancellations": {
    "total": 15,
    "details": [
      {
        "snackId": 101,
        "quantity": 5
      },
      {
        "snackId": 102,
        "quantity": 10
      }
    ]
  }
}


```


#### Exemplo de resposta para retorno 400
```
{
  "error": {
    "code": 400,
    "message": "Requisição inválida. Verifique os dados fornecidos."
   }
}
```


#### Exemplo de resposta para retorno 401
```
{
  "error": {
    "code": 401,
    "message": "Token inválido. Autenticação necessária."
   }
}
```


#### Exemplo de resposta para retorno 500
```
{
  "error": {
    "code": 500,
    "message": "Erro no servidor. Tente novamente mais tarde."
   }
}
```


## 3. Segurança e Autorização




### Autenticação
- **Método**: Utiliza-se o Auth.js, que oferece suporte a vários provedores de autenticação (como Google, GitHub, Facebook) e pode ser configurado para usar tokens de sessão ou tokens JWT.
- **Exemplo de Cabeçalho de Autenticação**:
```http
Authorization: Bearer {token}
```




### Autorização
- Como há três perfis na aplicação é necessário limitar o acesso de alguns perfis a certas funcionalidades e para isso estamos usando o RBAC, para controlar os acessos por funções. Essas funções são: o cliente (perfil mais básico) que tem acesso a área de salgados para realizar consultas e reservas e a área de cadastro, o vendedor que tem acesso às reservas registradas, aos salgados para verificar o estoque e poderá finalizar uma reserva ou venda física e o gerente (perfil mais importante) que é capaz de cadastrar um funcionário, visualizar os dados de reservas, vendas e cancelamentos e terá acesso a aba de relatórios.




### Medidas de Proteção de Dados
- **Transmissão Segura**: O Auth.js recomenda e facilita o uso de HTTPS para todas as comunicações. HTTPS criptografa o tráfego entre o cliente e o servidor, garantindo que dados sensíveis, como tokens e informações pessoais, sejam protegidos durante o transporte.
- **Criptografia**: Os tokens JWT gerados pelo Auth.js podem ser assinados e criptografados usando o algoritmo HS256 (HMAC + SHA-256) ou RS256 (RSA). Dados sensíveis, como tokens de sessão, são protegidos tanto no armazenamento quanto durante a transmissão.








### 4. Monitoramento e Performance




#### Monitoramento:


Utilizamos Prometheus e Grafana. Prometheus coleta e armazena métricas de desempenho, enquanto Grafana visualiza esses dados em dashboards interativos. Monitoramos o tempo de resposta para identificar latência, a taxa de erro para detectar falhas, a taxa de requisições por segundo para medir o tráfego, e o uso de CPU e memória para evitar sobrecargas. A disponibilidade (uptime) é monitorada para assegurar que o serviço esteja sempre disponível. Essas ferramentas juntas proporcionam uma visão clara e em tempo real do desempenho da API.


#### Desempenho:


- **Limites de Taxa (Rate Limits)**:
  - Cada cliente pode realizar até **1000 requisições por hora**. Se esse limite for excedido, a API retornará o código de erro `429 Too Many Requests`.
  
- **Otimização**:
  - **Caching**: Implementação de cache para respostas de endpoints que não precisam ser atualizados com frequência, reduzindo a carga no servidor. Será usado para armazenar informações sobre os tipos de salgado e reservas mais recentes, por exemplo, evitando consultas repetidas ao banco de dados e melhorando a performance.




  - **Otimização de Consultas**: Criação de índices apropriados nas colunas mais consultadas, como IDs de reservas e IDs de salgados, para acelerar a busca e recuperação de dados.


### Escalabilidade:


  - **Escalabilidade Horizontal**: O sistema será configurado para que possa adicionar novas instâncias de servidores. Mesmo que a demanda não seja alta, ter a capacidade de escalar horizontalmente pode ajudar a manter a performance durante picos.




- **Balanceamento de Carga**: Será usado para distribuir as requisições entre diferentes instâncias do servidor. Isso ajudará a evitar sobrecarga em uma única instância e melhora a resiliência do sistema.




## 5. Versionamento e Compatibilidade




**Política de Versionamento:**
- O versionamento da API é realizado de forma **implícita**, sem a necessidade de que os clientes finais especifiquem a versão diretamente no caminho da URL. Em vez disso, o sistema detecta automaticamente a versão adequada da API com base nas releases. 




**Compatibilidade:**
- As mudanças na API são feitas para manter **compatibilidade retroativa** sempre que possível. Pequenas alterações, como a adição de novos campos ou funcionalidades, não devem impactar os clientes existentes;
- Ao ocorrer uma quebra de compatibilidade, será tratado com uma tela de exceção e o usuário pode informar o problema para que tratemos o caso de forma transparente, por meio de canais de comunicação com o cliente. Os clientes continuarão usando a versão mais estável até que eles sejam migrados para a nova versão automaticamente. 


## 6. Recursos Adicionais

**Links de Referência:**
Em breve.

**Glossário:**
Em breve.
---