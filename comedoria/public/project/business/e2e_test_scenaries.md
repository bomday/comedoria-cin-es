# Feature: Visualização da Plataforma Comedoria (HU1)

## Scenario: Acesso à página inicial com sucesso
**Given** que estou com o navegador aberto  
**When** visito "[URL AQUI]"  
**Then** vejo que o título da página contém "Comedoria"

## Scenario: Verificação dos elementos de navegação
**Given** que estou na página inicial do Comedoria  
**When** observo a barra de navegação  
**Then** vejo as opções "Página Inicial", "Área do Cliente" e "Área do Funcionário"

## Scenario: Redirecionamento para a área do cliente
**Given** que estou na página inicial do Comedoria  
**When** clico no botão "Área do Cliente"  
**Then** sou redirecionado para a página de login ou cadastro da área do cliente

## Scenario: Redirecionamento para a área do funcionário
**Given** que estou na página inicial do Comedoria  
**When** clico no botão "Área do Funcionário"  
**Then** sou redirecionado para a página de login da área do funcionário

## Scenario: Verificação do conteúdo da página
**Given** que estou na página inicial do Comedoria  
**When** observo o corpo da página  
**Then** vejo a imagem de uma coxinha  
**And** vejo informações sobre como fazer uma reserva  
**And** vejo um botão para cadastro de cliente  
**And** vejo um botão para o grupo de WhatsApp  
**And** vejo um texto com a missão da Comedoria  
**And** vejo uma imagem de um estudante

## Scenario: Verificação do redirecionamento do botão de cadastro de cliente
**Given** que estou na página inicial do Comedoria  
**When** clico no botão de cadastro de cliente  
**Then** sou encaminhado à página de login ou cadastro do cliente

## Scenario: Verificação do redirecionamento do botão de WhatsApp
**Given** que estou na página inicial do Comedoria  
**When** clico no botão para o grupo de WhatsApp  
**Then** sou redirecionado para entrar no grupo de WhatsApp

# Feature: Visualização da Plataforma Comedoria em Dispositivos Móveis

## Scenario: Acesso à página inicial via dispositivo móvel
**Given** que estou acessando o site através de um dispositivo móvel  
**When** visito "[URL AQUI]"  
**Then** vejo que o título da página contém "Comedoria"

## Scenario: Verificação do botão de menu e opções de navegação (mobile)
**Given** que estou na página inicial do Comedoria (mobile)  
**When** procuro por elementos de navegação  
**Then** vejo um botão de menu  
**And** clico no botão de menu  
**Then** vejo as opções "Página Inicial", "Área do Cliente" e "Área do Funcionário"

## Scenario: Redirecionamento para a área do cliente e do funcionário (mobile)
**Given** que estou no menu da página inicial do Comedoria (mobile)  
**When** clico na opção "Área do Cliente"  
**Then** vejo as subopções "Login" e "Cadastro"  
**And** clico na opção "Área do Funcionário"  
**Then** vejo a subopção "Login"

## Scenario: Redirecionamento para a página de login (mobile)
**Given** que estou no menu da página inicial do Comedoria (mobile)  
**When** clico na opção "Login" dentro do menu "Área do Cliente"  
**Then** sou redirecionado para a página de login da área do cliente (mobile)

## Scenario: Redirecionamento para a página de cadastro (mobile)
**Given** que estou no menu da página inicial do Comedoria (mobile)  
**When** clico na opção "Cadastro" dentro do menu "Área do Cliente"  
**Then** sou redirecionado para a página de cadastro da área do cliente (mobile)

## Scenario: Verificação da responsividade da página
**Given** que estou na página inicial do Comedoria (mobile)  
**When** rolo a página para baixo  
**Then** todos os elementos da página se ajustam corretamente à tela

## Scenario: Verificação da visualização de imagens (mobile)
**Given** que estou na página inicial do Comedoria (mobile)  
**When** observo as imagens presentes  
**Then** as imagens são carregadas corretamente e se ajustam à tela

# Feature: Cadastro e Login de Usuário (HU2)

## Scenario: Acesso à tela de cadastro e login pelo desktop
**Given** que estou na página inicial do Comedoria  
**When** clico no botão "Cadastro"  
**Then** sou redirecionado para a tela de cadastro e login

## Scenario: Acesso à tela de cadastro e login pelo cliente
**Given** que estou na página inicial do Comedoria  
**When** clico no botão "Área do Cliente"  
**Then** sou redirecionado para a tela de cadastro e login

## Scenario: Cadastro com informações válidas
**Given** que estou na área de cadastro  
**When** preencho o campo "Nome" com "João Silva"  
**And** preencho o campo "E-mail" com "joao@example.com"  
**And** preencho o campo "Senha" com "senha123"  
**And** preencho o campo "Confirmar Senha" com "senha123"  
**And** marco a caixa de aceitar os termos e condições de uso e a politica de privacidade  
**Then** vejo uma mensagem de sucesso e sou redirecionado para a página inicial logada do cliente

## Scenario: Cadastro com e-mail inválido
**Given** que estou na área de cadastro  
**When** preencho o campo "E-mail" com "lucas@invalido"  
**And** preencho o campo "Senha" com "senha456"  
**Then** vejo uma mensagem de erro informando que o e-mail deve ser válido

## Scenario: Login com informações válidas
**Given** que estou na área de login  
**When** preencho o campo "E-mail" com "joao@example.com"  
**And** preencho o campo "Senha" com "senha123"  
**Then** sou redirecionado para a página inicial do cliente logado

# Feature: Login de Funcionário (HU6)

## Scenario: Acesso à tela de login pelo desktop
**Given** que estou na página inicial do Comedoria  
**When** clico no botão "Área do Funcionário"  
**Then** sou redirecionado para a tela de login

## Scenario: Login com informações válidas
**Given** que estou na área de login do funcionário  
**When** preencho o campo "E-mail" com "funcionario@example.com"  
**And** preencho o campo "Senha" com "senha_funcionario"  
**Then** sou redirecionado para a página inicial do sistema 

# Feature: Reserva de Salgado (HU3)

## Scenario: Acesso à tela de estoque após login
**Given** que estou logado como cliente  
**When** sou direcionado para a tela de estoque  
**Then** vejo a barra de busca e os filtros por tipo e sabor de salgado  
**And** vejo o estoque de salgados para reserva  
**And** vejo o meu carrinho vazio  
**And** vejo o botão para fazer reserva

## Scenario: Realização da reserva com sucesso
**Given** que estou na página de confirmação de reserva  
**When** clico no botão "Fazer Reserva"  
**Then** vejo um alerta indicando que a reserva foi efetuada com sucesso  
**And** sou redirecionado de volta para a tela de estoque  
**And** os salgados do meu pedido são retirados do estoque

# Feature: Visualização e Cancelamento de Reservas (HU4)

## Scenario: Acesso à página "Suas Reservas"
**Given** que estou logado como cliente  
**When** clico no botão "Suas Reservas" na barra de navegação  
**Then** sou redirecionado para a página de reservas

## Scenario: Cancelamento de reserva com confirmação
**Given** que estou no pop-up de confirmação de cancelamento  
**When** clico no botão "Confirmar"  
**Then** a reserva é cancelada e o card desaparece da lista de reservas ativas  
**And** a reserva aparece na lista de histórico como cancelada, com background vermelho  
**And** o salgado correspondente volta para o estoque
# Feature: Visualização e Realização de Vendas (HU7)

## Scenario 1: Acesso ao estoque
**Given** que estou logado como funcionário  
**When** acesso a tela de "Estoque"  
**Then** vejo uma lista de produtos com quantidades disponíveis  
**And** vejo a opção de "Realizar Venda"  

## Scenario 2: Visualização de produto disponível no estoque
**Given** que estou na tela de "Estoque"  
**When** olho para os produtos disponíveis  
**Then** vejo o nome, quantidade e imagem de cada produto disponível  

## Scenario 3: Visualização de produto indisponível
**Given** que estou na tela de "Estoque"  
**When** olho para um produto com estoque zero  
**Then** vejo o card do produto cinza e marcado como "Indisponível"  

## Scenario 4: Acesso à tela de realizar venda
**Given** que estou na tela de "Estoque"  
**When** clico no botão "Realizar Venda"  
**Then** sou redirecionado para a tela de "Realizar Venda"  

## Scenario 5: Adicionar produto à venda
**Given** que estou na tela de "Realizar Venda"  
**And** vejo produtos disponíveis  
**When** clico no botão verde de adicionar produto  
**Then** o produto é adicionado à lateral da tela com a quantidade selecionada  

## Scenario 6: Modificar a quantidade de um produto
**Given** que tenho um produto adicionado à venda  
**When** clico no botão de adicionar mais unidades  
**Then** a quantidade do produto na lateral é aumentada  
**And** o total é atualizado  

## Scenario 7: Remover produto da venda
**Given** que tenho um produto adicionado à venda  
**When** clico no botão de diminuir a quantidade até zero  
**Then** o produto é removido da lateral  
**And** o total é atualizado  

## Scenario 8: Finalizar venda com pagamento
**Given** que tenho produtos adicionados à venda  
**When** clico no botão "Finalizar Venda"  
**Then** os salgados são removidos do estoque  
**And** sou redirecionado para a tela de "Finalizar sua venda"  

## Scenario 9: Selecionar forma de pagamento e aplicar acréscimos
**Given** que estou na tela de "Finalizar sua venda"  
**When** seleciono "Cartão de Crédito"  
**Then** vejo um acréscimo de 5% no valor total  
**When** seleciono "Cartão de Débito"  
**Then** vejo um acréscimo de 2% no valor total  
**When** seleciono "Dinheiro" ou "Pix"  
**Then** não há acréscimos no valor total  

## Scenario 10: Aplicar desconto de funcionário
**Given** que estou na tela de "Finalizar sua venda"  
**When** seleciono a opção "Desconto para funcionário"  
**Then** o valor dos produtos é reduzido para o preço de custo  

## Scenario 11: Finalizar a venda
**Given** que estou na tela de "Finalizar sua venda"  
**When** seleciono a forma de pagamento e clico no botão "Finalizar Venda"  
**Then** a venda é concluída  
**And** vejo uma mensagem de confirmação "Sua venda foi efetuada com sucesso"  
**And** sou redirecionado para a tela de estoque  

## Scenario 12: Tentativa de finalizar venda sem produto selecionado
**Given** que estou na tela de "Realizar Venda"  
**And** nenhum produto foi adicionado à lateral  
**When** clico no botão "Finalizar Venda"  
**Then** não sou redirecionado  
**And** vejo uma mensagem informando que devo selecionar ao menos um produto  

## Scenario 13: Tentativa de adicionar produto indisponível
**Given** que estou na tela de "Realizar Venda"  
**And** vejo um produto indisponível  
**When** clico no botão de adicionar o produto indisponível  
**Then** nada acontece  
**And** o produto não é adicionado à lateral  

## Scenario 14: Seleção de múltiplas formas de pagamento
**Given** que estou na tela de "Finalizar sua venda"  
**And** uma forma de pagamento já está selecionada  
**When** tento clicar em outra forma de pagamento  
**Then** a primeira opção é desmarcada  
**And** somente a nova opção fica selecionada  

## Scenario 15: Retornar da tela de finalizar venda para a tela de realizar venda
**Given** que estou na tela de "Finalizar sua venda"  
**When** clico no botão de "Voltar"  
**Then** sou redirecionado para a tela de "Realizar Venda"  
**And** meus produtos selecionados ainda estão na lateral  

## Scenario 16: Retornar da tela de realizar venda para a tela de estoque
**Given** que estou na tela de "Realizar Venda"  
**When** clico no botão de "Voltar"  
**Then** sou redirecionado para a tela de "Estoque"  
**And** nenhum produto foi removido do estoque  

# Feature: Visualização e Gerenciamento de Reservas (HU8)

## Scenario 1: Acesso à página de reservas
**Given** que estou logado como funcionário  
**When** clico no botão "Reservas" na navegação superior  
**Then** sou redirecionado para a página de "Visualização de Reservas"  

## Scenario 2: Visualização de reservas ativas
**Given** que estou na página de "Visualização de Reservas"  
**When** olho para as reservas ativas  
**Then** vejo o nome do cliente, itens reservados, total da reserva e horário de criação  

## Scenario 3: Visualização de botões de ação nas reservas ativas
**Given** que estou na página de "Visualização de Reservas"  
**When** olho para as reservas ativas  
**Then** vejo dois botões em cada reserva:  
**And** um botão verde para "Finalizar"  
**And** um botão vermelho para "Cancelar"

## Scenario 4: Finalizar reserva
**Given** que estou na página de "Visualização de Reservas"  
**And** há uma reserva ativa disponível  
**When** clico no botão verde de "Finalizar"  
**Then** sou redirecionado para a tela de "Finalizar Reserva"  
**And** posso concluir a venda  

## Scenario 5: Cancelar reserva
**Given** que estou na página de "Visualização de Reservas"  
**And** há uma reserva ativa disponível  
**When** clico no botão vermelho de "Cancelar"  
**Then** aparece um pop-up de confirmação  
**When** confirmo o cancelamento  
**Then** a reserva é movida para o histórico como cancelada em vermelho  
**And** um e-mail é enviado ao cliente informando o cancelamento  

## Scenario 6: Visualização do histórico de reservas
**Given** que estou na página de "Visualização de Reservas"  
**When** olho para o histórico de reservas  
**Then** vejo as reservas finalizadas em verde  
**And** vejo as reservas canceladas em vermelho  

## Scenario 7: Redirecionamento ao finalizar uma reserva
**Given** que finalizei uma reserva com sucesso  
**When** sou redirecionado de volta à página de "Visualização de Reservas"  
**Then** vejo a reserva finalizada no histórico em verde  

## Scenario 8: Redirecionamento ao cancelar uma reserva
**Given** que cancelei uma reserva com sucesso  
**When** sou redirecionado de volta à página de "Visualização de Reservas"  
**Then** vejo a reserva cancelada no histórico em vermelho  

# Feature: Visualização e Gerenciamento de Reservas (HU8)

## Scenario 1: Acesso à página de reservas
**Given** que estou logado como funcionário  
**When** clico no botão "Reservas" na navegação superior  
**Then** sou redirecionado para a página de "Visualização de Reservas"  

## Scenario 2: Visualização de reservas ativas
**Given** que estou na página de "Visualização de Reservas"  
**When** olho para as reservas ativas  
**Then** vejo o nome do cliente, itens reservados, total da reserva e horário de criação  

## Scenario 3: Visualização de botões de ação nas reservas ativas
**Given** que estou na página de "Visualização de Reservas"  
**When** olho para as reservas ativas  
**Then** vejo dois botões em cada reserva:  
**And** um botão verde para "Finalizar"  
**And** um botão vermelho para "Cancelar"

## Scenario 4: Finalizar reserva
**Given** que estou na página de "Visualização de Reservas"  
**And** há uma reserva ativa disponível  
**When** clico no botão verde de "Finalizar"  
**Then** sou redirecionado para a tela de "Finalizar Reserva"  
**And** posso concluir a venda  

## Scenario 5: Cancelar reserva
**Given** que estou na página de "Visualização de Reservas"  
**And** há uma reserva ativa disponível  
**When** clico no botão vermelho de "Cancelar"  
**Then** aparece um pop-up de confirmação  
**When** confirmo o cancelamento  
**Then** a reserva é movida para o histórico como cancelada em vermelho  
**And** um e-mail é enviado ao cliente informando o cancelamento  

## Scenario 6: Rejeitar cancelamento da reserva
**Given** que estou visualizando o pop-up de confirmação de cancelamento de reserva  
**When** clico no botão "Não, não quero"  
**Then** o pop-up é fechado  
**And** a reserva permanece nas reservas ativas  

## Scenario 7: Fechar o pop-up de cancelamento
**Given** que estou visualizando o pop-up de confirmação de cancelamento de reserva  
**When** clico no botão "X" para fechar o pop-up  
**Then** o pop-up é fechado  
**And** a reserva permanece nas reservas ativas  

## Scenario 8: Visualização do histórico de reservas
**Given** que estou na página de "Visualização de Reservas"  
**When** olho para o histórico de reservas  
**Then** vejo as reservas finalizadas em verde  
**And** vejo as reservas canceladas em vermelho  

## Scenario 9: Redirecionamento ao finalizar uma reserva
**Given** que finalizei uma reserva com sucesso  
**When** sou redirecionado de volta à página de "Visualização de Reservas"  
**Then** vejo a reserva finalizada no histórico em verde  

## Scenario 10: Redirecionamento ao cancelar uma reserva
**Given** que cancelei uma reserva com sucesso  
**When** sou redirecionado de volta à página de "Visualização de Reservas"  
**Then** vejo a reserva cancelada no histórico em vermelho  

## Scenario 11: Clicar no botão de voltar na página de finalizar reserva
**Given** que estou na página de "Finalizar Reserva"  
**When** clico no botão "Voltar"  
**Then** sou redirecionado de volta à página de "Visualização de Reservas"  
**And** a reserva permanece nas reservas ativas  

# Feature: Reposição de Estoque (HU9)

## Scenario 1: Acesso à tela de reposição de estoque
**Given** que estou na tela de "Estoque"  
**When** clico no botão "Repor Estoque"  
**Then** sou redirecionado para a tela de "Reposição de Estoque"  

## Scenario 2: Visualização dos produtos na tela de reposição
**Given** que estou na tela de "Reposição de Estoque"  
**The**n vejo uma lista de produtos com quantidades disponíveis  
**And** vejo um botão verde ao lado de cada produto  

## Scenario 3: Adicionar produto à reposição
**Given** que estou na tela de "Reposição de Estoque"  
**When** clico no botão verde de adicionar produto  
**Then** o produto é adicionado à lateral da tela com uma unidade selecionada  

## Scenario 4: Modificar a quantidade de um produto na reposição
**Given** que tenho um produto adicionado à lateral  
**When** clico no botão de adicionar mais unidades  
**Then** a quantidade do produto na lateral é aumentada  

## Scenario 5: Remover produto da reposição
**Given** que tenho um produto adicionado à lateral  
**When** clico no botão de diminuir a quantidade até zero  
**Then** o produto é removido da lateral  

## Scenario 6: Repor o estoque
**Given** que tenho produtos adicionados à lateral  
**When** clico no botão "Repor Estoque"  
**Then** os salgados são adicionados ao estoque  
**And** vejo uma mensagem de sucesso "Sua reposição de estoque foi efetuada com sucesso"  

## Scenario 7: Tentativa de repor o estoque sem produtos selecionados
**Given** que estou na tela de "Reposição de Estoque"  
**And** nenhum produto foi adicionado à lateral  
**When** clico no botão "Repor Estoque"  
**Then** não sou redirecionado  
**And** vejo uma mensagem informando que devo selecionar ao menos um produto  

# Feature: Visualização de Relatórios (HU10)

## Scenario 1: Acesso à tela de gerenciamento
**Given** que estou logado como gerente  
**When** sou direcionado para a tela de gerenciamento  
**Then** vejo as abas superiores e a tela de estatísticas  

## Scenario 2: Visualização dos cards de vendas
**Given** que estou na tela de gerenciamento  
**When** olho para a primeira linha da tela de estatísticas  
**Then** vejo 3 cards com dados sobre as vendas  

## Scenario 3: Visualização dos cards de receita, custo e lucro
**Given** que estou na tela de gerenciamento  
**When** olho para a segunda linha da tela de estatísticas  
**Then** vejo um card com a receita, um card com o custo e um card com o lucro  

## Scenario 4: Botões para sugestões de estoque e exportação
**Given** que estou na tela de gerenciamento  
**When** olho para a segunda linha da tela de estatísticas  
**Then** vejo um botão para gerar uma sugestão de estoque e um botão para exportar as estatísticas  

## Scenario 5: Visualização do gráfico de vendas
**Given** que estou na tela de gerenciamento  
**When** olho para a área abaixo dos cards de vendas  
**Then** vejo um gráfico com as informações de venda durante a semana  

## Scenario 6: Mudança de visualização para tabela
**Given** que estou na tela de gerenciamento  
**When** clico no botão para mudar a visualização para tabela  
**Then** vejo os dados de vendas em formato de tabela  

## Scenario 7: Mudança de visualização para gráfico
**Given** que estou na tela de gerenciamento  
**When** estou na tabela de vendas  
**Then** clico no botão para mudar a visualização para gráfico  
**And** vejo os dados de vendas em formato de gráfico  

## Scenario 8: Visualização dos detalhes de um card de vendas
**Given** que estou na tela de gerenciamento  
**When** clico no botão "ver mais" de um card de vendas  
**Then** um pop up aparece com detalhes sobre aquele dado  

## Scenario 9: Alterar funcionário em turno
**Given** que estou na tela de gerenciamento  
**When** olho para o card do funcionário que está trabalhando  
**Then** vejo um botão para alterar o funcionário  
**When** clico no botão  
**Then** um pop up aparece para selecionar um novo funcionário  

## Scenario 10: Exportar estatísticas
**Given** que estou na tela de gerenciamento  
**When** clico no botão "exportar estatísticas"  
**Then** um pop up aparece perguntando o formato desejado  

## Scenario 11: Seleção do formato de exportação
**Given** que estou na tela de exportação  
**When** escolho o formato "PDF"  
**Then** o relatório total é baixado no formato PDF  
**When** escolho o formato "CSV"  
**Then** o relatório total é baixado no formato CSV  


# Feature: Visualização de Dados de Vendas e Reservas (HU11)

## Scenario 1: Acesso à tela de gerenciamento
**Given** que estou logado como gerente  
**When** sou direcionado para a tela de gerenciamento  
**Then** vejo as abas superiores e a tela de estatísticas  

## Scenario 2: Visualização dos dados de vendas
**Given** que estou na tela de gerenciamento  
**When** olho para a primeira linha da tela de estatísticas  
**Then** vejo os dados de vendas exibidos em 3 cards  

## Scenario 3: Visualização dos dados de reservas
**Given** que estou na tela de gerenciamento  
**When** olho para a seção de reservas na tela de estatísticas  
**Then** vejo os dados sobre as reservas exibidos em cards  

## Scenario 4: Acesso a detalhes de vendas
**Given** que estou na tela de gerenciamento  
**When** clico no botão "ver mais" de um card de vendas  
**Then** um pop up aparece com detalhes sobre os dados de vendas  

## Scenario 5: Acesso a detalhes de reservas
**Given** que estou na tela de gerenciamento  
**When** clico no botão "ver mais" de um card de reservas  
**Then** um pop up aparece com detalhes sobre os dados de reservas

# Feature: Geração de Sugestão de Estoque (HU12)

## Scenario 1: Acesso ao botão de sugestão de estoque
**Given** que estou na tela de gerenciamento  
**When** clico no botão "Gerar Sugestão de Estoque"  
**Then** um pop up é aberto com a sugestão de estoque  

## Scenario 2: Visualização da lista de salgados sugeridos
**Given** que estou no pop up de sugestão de estoque  
**When** olho para a lista exibida  
**Then** vejo os salgados que devem ser comprados e suas quantidades  

## Scenario 3: Fechar o pop up de sugestão de estoque
**Given** que estou no pop up de sugestão de estoque  
**When** clico no botão "Fechar"  
**Then** o pop up é fechado e volto para a tela de gerenciamento  

## Scenario 4: Copiar sugestão de estoque para a área de transferência
**Given** que estou no pop up de sugestão de estoque  
**When** clico no botão "Copiar"  
**Then** a lista de salgados e quantidades é copiada para a área de transferência  


# Feature: Gerenciamento de Funcionários (HU13)

## Scenario 1: Acesso à aba de funcionários
**Given** que estou na tela de gerenciamento  
**When** clico na aba "Funcionários" na navegação lateral  
**Then** sou direcionado para a lista de funcionários  

## Scenario 2: Visualização da lista de funcionários
**Given** que estou na aba "Funcionários"  
**When** olho para a lista de funcionários  
**Then** vejo o nome e o e-mail de acesso de cada funcionário  

## Scenario 3: Adicionar um novo funcionário
**Given** que estou na aba "Funcionários"  
**When** clico no botão "Adicionar Novo Funcionário"  
**Then** um pop up é aberto pedindo as informações básicas de cadastro  

## Scenario 4: Salvar um novo funcionário com sucesso
**Given** que estou no pop up de cadastro de funcionário  
**When** preencho todos os campos obrigatórios corretamente e clico no botão "Salvar"  
**Then** vejo uma mensagem informando que o funcionário foi salvo com sucesso  
And o funcionário aparece na lista de funcionários  

## Scenario 5: Erro ao tentar salvar um funcionário com horário conflitante
**Given** que estou no pop up de cadastro de funcionário  
**When** seleciono um turno de trabalho que já possui outra pessoa trabalhando e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que não foi possível salvar o funcionário e listando as pessoas que estão naquele horário  

## Scenario 6: Editar um funcionário
**Given** que estou na aba "Funcionários"  
And vejo um funcionário na lista  
**When** clico no botão "Editar" ao lado do funcionário  
**Then** um pop up é aberto com as informações do funcionário para edição  

## Scenario 7: Salvar alterações de um funcionário com sucesso
**Given** que estou no pop up de edição de funcionário  
**When** altero as informações e clico no botão "Salvar"  
**Then** vejo uma mensagem informando que o funcionário foi atualizado com sucesso  
And as alterações aparecem na lista de funcionários  

## Scenario 8: Erro ao tentar salvar modificações com horário conflitante
**Given** que estou no pop up de edição de funcionário  
**When** altero o turno de trabalho para um que já possui outra pessoa e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que não foi possível salvar as modificações  

## Scenario 9: Excluir um funcionário
**Given** que estou na aba "Funcionários"  
And vejo um funcionário na lista  
**When** clico no botão "Excluir" ao lado do funcionário  
**Then** um pop up é aberto perguntando se tenho certeza que desejo excluir  

## Scenario 10: Confirmar a exclusão de um funcionário
**Given** que estou no pop up de confirmação de exclusão  
**When** clico no botão "Sim, quero excluir"  
**Then** vejo uma mensagem informando que o funcionário foi excluído com sucesso  
And o funcionário desaparece da lista  

## Scenario 11: Rejeitar a exclusão de um funcionário
**Given** que estou no pop up de confirmação de exclusão  
**When** clico no botão "Não, não quero"  
**Then** o pop up é fechado e o funcionário permanece na lista  

## Scenario 12: Erro ao tentar salvar um novo funcionário sem preencher todos os campos obrigatórios
**Given** que estou no pop up de cadastro de funcionário  
**When** tento salvar o funcionário sem preencher todos os campos obrigatórios  
**Then** vejo uma mensagem de erro informando que todos os campos obrigatórios devem ser preenchidos  
And o funcionário não é salvo  

## Scenario 13: Erro ao tentar salvar um novo funcionário com e-mail inválido
**Given** que estou no pop up de cadastro de funcionário  
**When** preencho o campo de e-mail com um e-mail inválido e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que o e-mail é inválido  
And o funcionário não é salvo  

## Scenario 14: Erro ao tentar salvar um novo funcionário com uma senha sem letras e números
**Given** que estou no pop up de cadastro de funcionário  
**When** preencho o campo de senha com uma senha que não contém letras e números e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que a senha deve conter letras e números  
And o funcionário não é salvo  

## Scenario 15: Erro ao tentar salvar um novo funcionário com telefone inválido
**Given** que estou no pop up de cadastro de funcionário  
**When** preencho o campo de telefone com um telefone inválido e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que o telefone é inválido  
And o funcionário não é salvo  

## Scenario 16: Salvar um novo funcionário sem selecionar turno de trabalho
**Given** que estou no pop up de cadastro de funcionário  
**When** preencho todos os campos obrigatórios mas não seleciono turnos de trabalho  
**Then** o funcionário é salvo com sucesso  
And o funcionário aparece na lista de funcionários  

# Edição de Funcionário

## Scenario 17: Erro ao tentar salvar alterações de um funcionário sem preencher todos os campos obrigatórios
**Given** que estou no pop up de edição de funcionário  
**When** tento salvar as alterações sem preencher todos os campos obrigatórios  
**Then** vejo uma mensagem de erro informando que todos os campos obrigatórios devem ser preenchidos  
And as alterações não são salvas  

## Scenario 18: Erro ao tentar salvar alterações de um funcionário com e-mail inválido
**Given** que estou no pop up de edição de funcionário  
**When** preencho o campo de e-mail com um e-mail inválido e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que o e-mail é inválido  
And as alterações não são salvas  

## Scenario 19: Erro ao tentar salvar alterações de um funcionário com uma senha sem letras e números
**Given** que estou no pop up de edição de funcionário  
**When** preencho o campo de senha com uma senha que não contém letras e números e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que a senha deve conter letras e números  
And as alterações não são salvas  

## Scenario 20: Erro ao tentar salvar alterações de um funcionário com telefone inválido
**Given** que estou no pop up de edição de funcionário  
**When** preencho o campo de telefone com um telefone inválido e clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que o telefone é inválido  
And as alterações não são salvas  

## Scenario 21: Salvar alterações de um funcionário sem selecionar turno de trabalho
**Given** que estou no pop up de edição de funcionário  
**When** preencho todos os campos obrigatórios mas não seleciono turnos de trabalho  
**Then** as alterações são salvas com sucesso  
And o funcionário atualizado aparece na lista de funcionários  

## Scenario 22: Fechar o pop-up de criação sem salvar o funcionário
**Given** que estou no pop up de cadastro de funcionário  
**When** preencho o formulário de criação de funcionário  
And clico no botão de "Fechar" sem salvar  
**Then** o funcionário não é salvo  
And o pop up fecha  

## Scenario 23: Fechar o pop-up de edição sem salvar as alterações
**Given** que estou no pop up de edição de funcionário  
**When** edito as informações do funcionário  
And clico no botão de "Fechar" sem salvar  
**Then** as alterações não são salvas  
And o pop up fecha  

# Feature: Gerenciamento de Produtos (HU14)

## Scenario 1: Visualizar produtos no cardápio
**Given** que estou na tela de gerenciamento de produtos  
**When** acesso a aba de "Produtos"  
**Then** vejo uma lista de produtos com o nome, tipo e sabores de cada salgado  

## Scenario 2: Cadastrar um novo produto com sucesso
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Adicionar Produto"  
**When** preencho todos os campos obrigatórios (nome, tipo, valor e sabores)  
**And** clico no botão "Salvar"  
**Then** o produto é salvo com sucesso  
**And** vejo uma mensagem de confirmação "Produto salvo com sucesso"  
**And** o produto aparece na lista de produtos  

## Scenario 3: Tentar cadastrar um produto sem preencher os campos obrigatórios
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Adicionar Produto"  
**When** deixo um ou mais campos obrigatórios em branco  
**And** clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que todos os campos são obrigatórios  
**And** o produto não é salvo  

## Scenario 4: Adicionar um novo sabor ao cadastrar um produto
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Adicionar Produto"  
**When** seleciono um sabor predefinido  
**And** clico em "Adicionar Novo Sabor"  
**And** insiro o nome de um novo sabor  
**And** clico no botão "Salvar"  
**Then** o novo sabor é adicionado  
**And** o produto é salvo com sucesso  

## Scenario 5: Editar um produto existente
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Editar" ao lado de um produto existente  
**When** altero as informações (nome, tipo, valor ou sabores)  
**And** clico no botão "Salvar"  
**Then** o produto é atualizado com sucesso  
**And** vejo uma mensagem de confirmação "Produto atualizado com sucesso"  

## Scenario 6: Remover um produto
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Remover" ao lado de um produto  
**When** confirmo a exclusão no pop-up  
**Then** o produto é removido da lista  
**And** vejo uma mensagem de confirmação "Produto removido com sucesso"  

## Scenario 7: Tentar cadastrar um produto com valor inválido
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Adicionar Produto"  
**When** insiro um valor inválido (ex.: texto em vez de número)  
**And** clico no botão "Salvar"  
**Then** vejo uma mensagem de erro informando que o valor deve ser numérico  
**And** o produto não é salvo  

## Scenario 8: Fechar o formulário de cadastro sem salvar
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Adicionar Produto"  
**When** preencho os campos obrigatórios  
**And** clico no botão "Fechar" sem salvar  
**Then** o produto não é salvo  
**And** o formulário é fechado  

## Scenario 9: Fechar o formulário de edição sem salvar
**Given** que estou na aba de "Produtos"  
**And** clico no botão de "Editar" ao lado de um produto  
**When** altero as informações do produto  
**And** clico no botão "Fechar" sem salvar  
**Then** as alterações não são salvas  
**And** o formulário é fechado  

# Feature: Gerenciamento de Clientes (HU15)

## Scenario 1: Visualização da lista de clientes
**Given** que estou na tela de "Gerenciamento de Clientes"  
**When** visualizo a lista de clientes cadastrados  
**Then** vejo o nome e e-mail de cada cliente  

## Scenario 2: Pesquisa de cliente
**Given** que estou na tela de "Gerenciamento de Clientes"  
**When** digito um nome ou e-mail na barra de pesquisa  
**Then** a lista de clientes é filtrada de acordo com o termo pesquisado  

## Scenario 3: Tentativa de excluir cliente
**Given** que estou na tela de "Gerenciamento de Clientes"  
**And** vejo a lista de clientes  
**When** clico no botão "Excluir" ao lado de um cliente  
**Then** vejo um pop-up de confirmação  

## Scenario 4: Confirmação de exclusão de cliente
**Given** que estou vendo o pop-up de confirmação de exclusão  
**When** confirmo a exclusão clicando no botão "Sim"  
**Then** o cliente é removido da lista  
**And** vejo uma mensagem de sucesso informando que o cliente foi excluído  

## Scenario 5: Cancelar exclusão de cliente
**Given** que estou vendo o pop-up de confirmação de exclusão  
**When** clico no botão "Não" ou no botão de fechar  
**Then** o pop-up é fechado  
**And** o cliente não é removido da lista  



