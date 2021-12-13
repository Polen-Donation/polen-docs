---
id: user
title: User
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get User Detail
Este método retorna detalhes de um usuário específico.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id da loja - `string`.

- Retorna um json:
    - identifier: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causesList: `array`.

```csharp
var details = await polen.User.GetUserDetails(storeId, userId);
Console.Write(details);
```

## Get User Impact
Este método retorna o impacto causado pelo usuário.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id do usuário - `string`.
    
 - Retorna um json:
    - userId: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causeList: `array`.

```csharp
var imapact = await polen.User.GetUserImpact(storeId, userId);
Console.Write(imapact);
```

## Get User List
Este método retorna uma lista de usuários.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um json:
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.  

```csharp
const list = await polen.getUserList(storeId);
Console.Write(list);
```

## Update User
Este método atualiza dados de um usuário.

- Recebe o argumento:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe os argumentos `body` que é um objeto com os campos:
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
    - `verified`: (opcional) para verificações adicionais - `booln`.
    - `optIn`: (opcional) verifica se deve enviar um email ao usuário - `bool`.
    - `createAt`: (opcional) data da requisição - `string`.

- Retorna um json:
    - identifier: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causesList: `array`.

```csharp
var update = polen.User.UpdateUser(storeId, body);
Console.Write(update);
```

## Create User
Este método adiciona um novo usuário.

- Recebe o argumento:
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
    - `verified`: (opcional) para verificações adicionais - `bool`.
    - `optIn`: (opcional) verifica se deve enviar um email ao usuário - `bool`.
    - `createAt`: (opcional) data da requisição - `string`.

- Retorna um json:
    - identifier: `string`.
    - email: `string`.
    - name: `string`.
    - phone: `string`.
    - document: `string`.
    - causesList: `array`.

```csharp
const create = polen.createUser(storeId, body)
Console.Write(create)
```

## Add User Cause
Este método associa/desassocia causas a um usuário.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `userId`: (obrigatório) id do usuário - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `addCauseList`: (opcional) causas que deseja adicionar - `array`.
    - `disableCausesList`: (obrigatório) causas que deseja remover - `array`.

- Retorna um json:
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
    - active: `bool`
    - test: `bool`
    - totalDonated: `float`
    - totalBackers: `float`
    - errorCode: `int`

```csharp
var add = await polen.User.UpdateUserCause(storeId, userId, body);
Console.Write(add)
```
