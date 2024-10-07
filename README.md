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
