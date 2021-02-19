---
id: user
title: User
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a documentação da API.
:::

## Get User Detail
Este método retorna detalhes de um usuário específico.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
      - identifier: `string`.
      - email: `string`.
      - name: `string`.
      - phone: `string`.
      - document: `string`.
      - causesList: `array`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: "",
  userId: "",
}

impact = polen.get_imapact_consolidated(params)
puts impact.body
```

## Delete User
Este método deleta um usuário específico.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
      - success: `boolean`.
      - errorCode: `number`.
      - error: `string`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: "",
  userId: "",
}

delete = polen.delete_user(params)
puts delete.body
```

## Get User List
Este método retorna uma lista de usuários.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `[]`.
        - pageNumber: `number`.
        - nextPage: `string`.   .
    - `code`: status da requisição.

```ruby
params = {
  storeId: "",
}

list = polen.get_user_list(params)
puts list.body
```

## Update User
Este método atualiza dados de um usuário.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
    - `userId`: (obrigatório) id do usuário - `string`.
    - `email`: (opciona) email do usuário - `string`.
    - `name`: (obrigatório) nome do usuário - `string`.
    - `phone`: (opcional) telefone do usuário - `string`.
    - `document`: (opcional) documento de identificação (rg, cpf, cnpj) - `string`.
    - `gender`: (opcional) genero do usuário - `string`.
    - `birthdate`: (opcional) data de nascimento do usuário - `string`.
    - `city`: (opcional) cidade do usuário - `string`.
    - `state`: (opcional) estado do usuário - `string`.
    - `country`: (opcional) país do usuário - `string`.
    - `verified`: (opcional) para verificações adicionais - `boolean`.
    - `optIn`: (opcional) verifica se deve enviar um email ao usuário - `boolean`.
    - `createAt`: (opcional) data da requisição - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
      - identifier: `string`.
      - email: `string`.
      - name: `string`.
      - phone: `string`.
      - document: `string`.
      - causesList: `array`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: "",
}

payload = {
  userId: "",
  email: "",
  name: "",
  phone: "",
  document: "",
  gender: "",
  birthdate: "",
  city: "",
  state: "",
  country: "",
  verified: false,
  optIn: false,
  createAt: "2021-02-12T12:49:25.636Z"
}

update = polen.update_user(payload, params)
puts update.body
```

## Create User
Este método adiciona um novo usuário.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
    - `causeList`: (opcional) lista de causas que serão apoiadas - `array`.
    - `userId`: (obrigatório) id do usuário - `string`.
    - `email`: (opciona) email do usuário - `string`.
    - `name`: (obrigatório) nome do usuário - `string`.
    - `phone`: (opcional) telefone do usuário - `string`.
    - `document`: (opcional) documento de identificação (rg, cpf, cnpj) - `string`.
    - `gender`: (opcional) genero do usuário - `string`.
    - `birthdate`: (opcional) data de nascimento do usuário - `string`.
    - `city`: (opcional) cidade do usuário - `string`.
    - `state`: (opcional) estado do usuário - `string`.
    - `country`: (opcional) país do usuário - `string`.
    - `verified`: (opcional) para verificações adicionais - `boolean`.
    - `optIn`: (opcional) verifica se deve enviar um email ao usuário - `boolean`.
    - `createAt`: (opcional) data da requisição - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - identifier: `string`.
        - email: `string`.
        - name: `string`.
        - phone: `string`.
        - document: `string`.
        - causesList: `array`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: "",
}

payload = {
  causeList: [],
  userId: "",
  email: "",
  name: "",
  phone: "",
  document: "",
  gender: "",
  birthdate: "",
  city: "",
  state: "",
  country: "",
  verified: false,
  optIn: false,
  createAt: "2021-02-12T12:49:25.636Z"
}

create = polen.create_user(payload, params)
puts create.body
```

## Add User Cause
Este método associa/desassocia causas a um usuário.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id do usuário - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
    - `addCauseList`: (opcional) causas que deseja adicionar - `array`.
    - `disableCausesList`: (obrigatório) causas que deseja remover - `array`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - apiKey: `string`.
        - apiToken: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - childStoreId: `array`.
        - email: `string`.
        - name: `string`.
        - phone: `string`.
        - document: `string`.
        - causesList: `array`.
        - logo: `string`.
        - domain: `string`.
        - active: `boolean`
        - test: `boolean`
        - totalDonated: `number`
        - totalBackers: `number`
        - errorCode: `number`
    - `code`: status da requisição.

```ruby
params = {
  storeId: "",
  userId: "",
}

payload = {
  "addCausesList": [
    ""
  ],
  "disableCausesList": [
    ""
  ]
}

add = polen.add_user_cause(payload, params)
puts add.body
```