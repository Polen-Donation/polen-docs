---
id: autenticacao
title: Autenticação
sidebar_label: Autenticação
slug: /
---

A API do Polen existe para simplificar e automatizar toda sua gestão de responsabilidade social.
A partir desta API você tem acesso a instituições que passaram por uma avaliação e curadoria para estarem habilitadas a captar recursos.
De maneira simples é possível adicionar uma doação em suas transações e todo o trabalho financeiro, fiscal, legal e de transparência sobre o bom uso deste recurso nós cuidamos pra você.


### Entendendo melhor:
Veja o vídeo onde explicamos melhor como os módulos do Polen funcionam e mostramos utilizando as chamadas via postman na prática como utilizar a API.

- Overview da API: https://youtu.be/rQKPUCEMTVc
- Na prática: https://youtu.be/HD4xokxWFVY


### Na prática API v2:
- Overview da API(pt2): https://www.loom.com/share/04f81bf844914200a4490779cd93ef83
- Collection do Postman: postman (importe está collection para o seu postman)

### Autenticação
Para acessar os métodos desta API você precisa ter uma conta no Polen. Para isso você pode entrar em bemvindo.opolen.com.br ou entre em contato.
Tendo sua conta no Polen, acesse seu painel em painel.opolen.com.br e no menu 'Setup' você irá encontrar a chave de API (api_token). Está é a chave que você passará em toda requisição para a API do Polen.
É obrigatório também passar o storeId na sua requisição. O StoreId é o Id de qual loja está fazendo a doação. Uma conta pode ter N lojas. No seu painel administrativo do Polen você pode criar e consultar suas lojas.
Para criar uma nova Store, você também precisará do companyId. Ao rodar o GET /api/v2/company/list apenas passando o api_token.

### Paginação
Todas as listas que o Polen retorna são paginadas. Por padrão sempre retornará 20 itens nesta lista e você pode configurar para até 100 itens por página.
