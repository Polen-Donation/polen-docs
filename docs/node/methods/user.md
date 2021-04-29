---
id: user
title: User
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get User Detail
Este método retorna detalhes de um usuário específico.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - identifier: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causesList: `array`.

```javascript
const params = {
  storeId: "",
  userId: "",
}

const details = await polen.getUserDetails(params);
console.log(details);
```

## Get User Impact
Este método retorna o impacto causado pelo usuário.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id do usuário - `string`.
    
 - Retorna um objeto:
    - userId: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causeList: `array`.

```javascript
const params = {
  storeId: "",
  userId: ""
}

const imapact = await polen.getUserImpact(params);
console.log(imapact);
```

## Get User List
Este método retorna uma lista de usuários.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto:
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.  

```javascript
const params = {
  storeId: "",
}

const list = await polen.getUserList(params);
console.log(list);
```

## Update User
Este método atualiza dados de um usuário.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
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

- Retorna um objeto:
    - identifier: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causesList: `array`.

```javascript
const params = {
  storeId: "",
}

const body = {
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

const update = polen.updateUser(payload, body);
console.log(update);
```

## Create User
Este método adiciona um novo usuário.

- Recebe o argumento `params` que é um obejto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
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

- Retorna um objeto:
    - identifier: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causesList: `array`.

```javascript
const params = {
  storeId: "",
}

const body = {
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

const create = polen.createUser(payload, body)
console.log(create.data)
```

## Add User Cause
Este método associa/desassocia causas a um usuário.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id do usuário - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `addCauseList`: (opcional) causas que deseja adicionar - `array`.
    - `disableCausesList`: (obrigatório) causas que deseja remover - `array`.

- Retorna um objeto:
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

```javascript
const params = {
  storeId: "",
  userId: "",
}

const body = {
  addCausesList: [
    ""
  ],
  disableCausesList: [
    ""
  ]
}

const add = await updateUserCause(params, body);
console.log(add)
```
