---
id: notify-donation
title: Donation Notify
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a documentação da API.
:::

## Get Notify Donation

Traz os detalhes de uma doações específica a partir de seu Id.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `polenTransactionId`: (opcional) Id da transacao do Polen - `string`.
    - `orderId`: (opcional) id para identificar esta transação- `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - transactionId: `string`.
        - storeId: `string`.
        - orderId: `string`.
        - donation: `number`.
        - userDonation: `number`.
        - purchase: `number`.
        - ngoId: `string`.
        - polenUserId: `string`.
        - userEmail: `string`.
        - status: `string`.
        - tags: `[]`.
        - createAt: `string`.
    - `code`: status da requisição.
```ruby
params = {
  storeId: "id"
}

notify_donation = polen.get_notify_donation(params)
puts notify_donation.body
```

## Get Notify Donation List
Traz os detalhes de uma doações específica a partir de seu Id.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `userId`: (opcional) código para identificar o consumidor - `string`.
    - `ngoId`: (opcional) código da instituição apoiada - `string`.
    - `fromDate`: (opcional) data inicial para fazer uma busca dentro de um espaço de tempo específico - `string`.
    - `toDate`: (opcional) data final para fazer uma busca dentro de um espaço de tempo específico - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `[]`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.
```ruby
params = {
  storeId: "id"
}

list = polen.get_notify_donation_list(params)
puts list.body
```

## Update Notify Donation
Neste método atualizamos o status da doação.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) identificador da loja - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
    - `polenTransactionId`: (opcional) id da transição do Polen - `string`.
    - `orderId`: (opcional) id da passado na criação da doação - `string`.
    - `status`: (obrigatório) status da doação - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - transactionId: `string`.
        - storeId: `string`.
        - orderId: `string`.
        - donation: `number`.
        - userDonation: `number`.
        - purchase: `number`.
        - ngoId: `string`.
        - polenUserId: `string`.
        - userEmail: `string`.
        - status: `string`.
        - tags: `[]`.
        - createAt: `string`.
    - `code`: status da requisição.
```ruby
params = {
  storeId: "id"
}

payload = {
  polenTransactionId: "id",
  orderId: "id",
  status: 0
}

update = polen.update_notify_donation(params, payload)
puts update.body
```

## Create Notify Donation
Adiciona uma nova doação feita na loja.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `companyId`: (obrigatório)  identificador da empresa.

- Recebe o argumento `payload` que é um hash com os campos:
    - `orderId`: (obrigatório) id que você utilizará para identificar esta transação - `string`.
    - `donation`: (obrigatório) valor da doação - `number`.
    - `userId`: (opcional) Id de identificação do usuario - `string`.
    - `ngoId`: (opcional) id da ong que quer apoiar - `string`.
    - `childStoreId`: (opcional) id para segmentar a loja - `string`.
    - `status`: (opcional) status dessa doação - `number`.
    - `storeUrl`: (opcional) URL da loja no Polen - `string`.
    - `createAt`: (opcional) data da criaço desta nova doação - `string`.
    - `purchase`: (opcional) valor da transição - `number`.
    - `storeName`: (opcional) nome da loja - `string`.
    - `userEmail`: (opcional) email do usuário - `string`.
    - `userName`: (opcional) nome do usuário - `string`.
    - `userPhone`: (opcional) telefone do usuário - `string`.
    - `userGender`: (opcional) genero do usuário - `string`.
    - `userDocument`: (opcional) documento indetificador do usuário - `string`.
    - `birthdate`: (opcional) data de nascimento do usuário - `string`.
    - `city`: (opcional) cidade - `string`.
    - `state`: (opcional) estado - `string`.
    - `country`: (opcional) país - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - transactionId: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - orderId: `string`.
        - donation: `number`.
        - userDonation: `number`.
        - purchase: `number`.
        - ngoId: `string`.
        - ngoName: `string`.
        - polenUserId: `string`.
        - userId: `string`.
        - polenUserId: `string`.
        - userEmail: `string`.
        - status: `string`.
        - tags: `[]`.
        - createAt: `string`.
    - `code`: status da requisição.
```ruby
params = {
  storeId: "id"
}

payload = {
    orderId: "", 
    donation: -100000000, 
    userDonation: -100000000, 
    userId: "", 
    tags: [""], 
    storeName: "", 
    storeUrl: "", 
    currency: "", 
    purchase: -100000000, 
    ngoId: "", 
    userEmail: "", 
    userPhone: "", 
    userDocument: "", 
    userGender: "", 
    userBirthDate: "", 
    userName: "", 
    city: "", 
    state: "", 
    country: "", 
    paymentMethod: "", 
    notes: "", 
    status: 0, 
    createAt: "2021-02-12T12:49:25.513Z", 
    test: false
}

create = polen.update_notify_donation(params, payload)
puts create.body
```