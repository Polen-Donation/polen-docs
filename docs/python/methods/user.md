---
id: user
title: User
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get User Detail
Este método retorna detalhes de um usuário específico.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - identifier: `string`.
        - email: `string`.
        - name: `string`.
        - phone: `string`.
        - document: `string`.
        - causesList: `array`.
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
  'userId': "",
}

impact = polen.get_imapact_consolidated(params)
print(impact.content)
```

## Delete User
Este método deleta um usuário específico.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - success: `boolean`.
        - errorCode: `number`.
        - error: `string`.
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
  'userId': "",
}

delete = polen.delete_user(params)
print(delete.content)
```

## Get User List
Este método retorna uma lista de usuários.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.   .
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
}

list = polen.get_user_list(params)
print(list.content)
```

## Update User
Este método atualiza dados de um usuário.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body` que é um dicionário com os campos:
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
    - `content`: conteúdo da resposta.
        - identifier: `string`.
        - email: `string`.
        - name: `string`.
        - phone: `string`.
        - document: `string`.
        - causesList: `array`.
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
}

body = {
  'userId': "",
  'email': "",
  'name': "",
  'phone': "",
  'document': "",
  'gender': "",
  'birthdate': "",
  'city': "",
  'state': "",
  'country': "",
  'verified': false,
  'optIn': false,
  'createAt': "2021-02-12T12:49:25.636Z"
}

update = polen.update_user(payload, body)
print(update.content)
```

## Create User
Este método adiciona um novo usuário.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body` que é um dicionário com os campos:
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
    - `content`: conteúdo da resposta.
        - identifier: `string`.
        - email: `string`.
        - name: `string`.
        - phone: `string`.
        - document: `string`.
        - causesList: `array`.
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
}

body = {
  'causeList': [],
  'userId': "",
  'email': "",
  'name': "",
  'phone': "",
  'document': "",
  'gender': "",
  'birthdate': "",
  'city': "",
  'state': "",
  'country': "",
  'verified': false,
  'optIn': false,
  'createAt': "2021-02-12T12:49:25.636Z"
}

create = polen.create_user(payload, body)
print(create.content)
```

## Add User Cause
Este método associa/desassocia causas a um usuário.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id do usuário - `string`.

- Recebe o argumento `body` que é um dicionário com os campos:
    - `addCauseList`: (opcional) causas que deseja adicionar - `array`.
    - `disableCausesList`: (obrigatório) causas que deseja remover - `array`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
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
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
  'userId': "",
}

body = {
  "addCausesList": [
    ""
  ],
  "disableCausesList": [
    ""
  ]
}

add = polen.add_user_cause(payload, body)
print(add.content)
```