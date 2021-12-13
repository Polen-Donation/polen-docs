---
id: store
title: Store
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Store Details
Este método retorna os detalhes de uma loja específica.

- Recebe o argumento:
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um json:
    - apiKey: `string`.
    - apiToken: `string`.
    - storeId: `string`.
    - storeUrl: `string`.
    - childStoreId: `array`.
    - email: `string`.
    - name: `string`.
    - logo: `string`.
    - phone: `string`.
    - domain: `string`.
    - document: `string`.
    - causesList: `array`.
    - active: `boolean`.
    - test: `boolean`.
    - totalDonated: `float`.
    - totalBackers: `int`.
    - errorCode: `int`.

```csharp
var storeDetail = await polen.Store.GetStoreDetail(storeId);
Console.Write(storeDetail);
```

## Get Store List
Este método retorna todas as lojas da sua conta.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.

- Retorna um objeto:
    - result: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.

```csharp
var list = await polen.Store.GetStoreList();
Console.Write(list);
```

## Update Store
Este método atualiza dados de uma loja.

- Recebe o argumento:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `causeList`: (opcional) lista de causas apoiadas - `string`.
    - `storeName`: (opcional) nome da loja - `string`.
    - `email`: (opcional) email do usuário - `string`.
    - `name`: (opcional) nome do usuário - `string`.
    - `domain`: (opcional) url da loja -  `string`.
    - `phone`: (opcional) telefone da loja - `string`.
    - `logo`: (opcional) logo da loja - `string`.
    - `address`: (opcional) endereço da loja - `string`
    - `segment`: (opcional) segmento da empresa - `string`.
    - `city`: (opcional) cidade da loja - `string`.
    - `state`: (opcional) estado onde se encotra a loja - `string`.
    - `zipcode`: (opcional) CEP da loja - `string`.
    - `document`: (opcional) documento de identificação - `string`.
    - `nameContact`: (opcional) nome do responsável pela loja - `string`.
    - `tags`: (opcional) novos id's - `array`.
    - `test`: (opcional) usado para contabilizarmos as doações feitas nesta loja - `bool`.
    - `active`: (opcional) usado para ativar a loja - `bool`.
    - `platformId`: (opcional) id da plataforma - `string`.
    
- Retorna um json:
    - apiKey: `string`.
    - apiToken: `string`.
    - storeId: `string`.
    - storeUrl: `string`.
    - childStoreId: `array`.
    - email: `string`.
    - name: `string`.
    - logo: `string`.
    - phone: `string`.
    - domain: `string`.
    - document: `string`.
    - causesList: `array`.
    - active: `bool`.
    - test: `bool`.
    - totalDonated: `float`.
    - totalBackers: `int`.
    - errorCode: `int`.

```csharp
var update = await polen.Store.UpdateStore(storeId, body);
Console.Write(update);
```

## Add Cause Store
Este método adiciona causas a uma loja.

- Recebe o argumento:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body`:
    - `Array de string`: lista de ids das Causas ou Instituicoes que serao apoiadas - `array`.

- Retorna um json:
    - apiKey: `string`.
    - apiToken: `string`.
    - storeId: `string`.
    - storeUrl: `string`.
    - childStoreId: `array`.
    - email: `string`.
    - name: `string`.
    - logo: `string`.
    - phone: `string`.
    - domain: `string`.
    - document: `string`.
    - causesList: `string`.
    - active: `bool`.
    - test: `bool`.
    - totalDonated: `float`.
    - totalBackers: `int`. 
    - errorCode: `int`.

```csharp
var addCauseResult = await polen.Store.AddCause(storeId, body);
Console.Write(addCauseResult);
```

## Create Store
Este método cria uma nova loja.

- Recebe o argumento:
    - `companyId`: (obrigatório) id da empresa - `string`.

- Recebe o argumento `bosy` que é um objeto com os campos:
   - `storeName`: (opcional) nome da loja - `string`.
   - `causesList`: (opcional) lista de causa apoiadas - `array`.
   - `storeUrl`: (opcional) url da loja - `string`.
   - `email`: (opcional) email do usuário - `string`.
   - `name`: (opcional) nome do usuário - `string`.
   - `domain`: (opcional) url da loja -  `string`.
   - `phone`: (opcional) telefone da loja - `string`.
   - `logo`: (opcional) logo da loja - `string`.
   - `address`: (opcional) endereço da loja - `string`
   - `segment`: (opcional) segmento da empresa - `string`.
   - `city`: (opcional) cidade da loja - `string`.
   - `state`: (opcional) estado onde se encotra a loja - `string`.
   - `zipcode`: (opcional) CEP da loja - `string`.
   - `document`: (opcional) documento de identificação - `string`.
   - `nameContact`: (opcional) nome do responsável pela loja - `string`.
   - `tags`: (opcional) novos id's - `array`.
   - `test`: (opcional) usado para contabilizarmos as doações feitas nesta loja - `bool`.
   - `active`: (opcional) usado para ativar a loja - `bool`.
   - `platformId`: (opcional) id da plataforma - `string`.

- Retorna um json:
     - apiKey: `string`.
     - apiToken: `string`.
     - storeId: `string`.
     - storeUrl: `string`.
     - childStoreId: `array`.
     - email: `string`.
     - name: `string`.
     - logo: `string`.
     - phone: `string`.
     - domain: `string`.
     - document: `string`.
     - causesList: `array`.
     - active: `boolean`.
     - test: `boolean`.
     - totalDonated: `number`.
     - totalBackers: `number`.
     - errorCode: `number`.

```csharp
const create = await polen.Store.createStore(companyId, body);
Console.Write(create);
```

## Remove Cause Store
Este método remove causas de uma loja.

- Recebe o argumento:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `body` que é um array:
    - `Array de string`: lista de ids das causas ou instituições que serão removidas - `array`.

- Retorna um json:
     - apiKey: `string`.
     - apiToken: `string`.
     - storeId: `string`.
     - storeUrl: `string`.
     - childStoreId: `array`.
     - email: `string`.
     - name: `string`.
     - logo: `string`.
     - phone: `string`.
     - domain: `string`.
     - document: `string`.
     - causesList: `array`.
     - active: `boolean`.
     - test: `boolean`.
     - totalDonated: `number`
     - totalBackers: `number`
     - errorCode: `number`


```csharp
const removeCause = await polen.Store.RemoveCause(storeId, body);
Console.Write(removeCause);
```
