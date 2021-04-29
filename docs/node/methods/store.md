---
id: store
title: Store
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Store Details
Este método retorna os detalhes de uma loja específica.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto:
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

```javascript
const params = {
  storeId: "id",
}

const storeDetail = await polen.getStoreDetail(params);
console.log(storeDetail);
```

## Get Store List
Este método retorna todas as lojas da sua conta.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto:
    - result: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.

```javascript
const list = await polen.getStoreList();
console.log(list);
```

## Update Store
Este método atualiza dados de uma loja.

- Recebe o argumento `params` que é um objeto com os campos:
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
    - `test`: (opcional) usado para contabilizarmos as doações feitas nesta loja - `boolean`.
    - `active`: (opcional) usado para ativar a loja - `boolean`.
    - `platformId`: (opcional) id da plataforma - `string`.
    
- Retorna um objeto:
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

```javascript
const params = {
  storeId: ""
}

const body = {
  email: "",
  storeUrl: "",
  storeName: "",
  tags: [
    ""
  ],
  domain: "",
  nameContact: "",
  phone: "",
  document: "",
  logo: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  platformId: "",
  test: false,
  active: false
}

const update = await polen.updateStore(params, body);
console.log(update);
```

## Add Cause Store
Este método adiciona causas a uma loja.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `payload` que é um objeto com os campos:
    - `Array de string`: lista de ids das Causas ou Instituicoes que serao apoiadas - `array`.

- Retorna um objeto:
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
    - active: `boolean`.
    - test: `boolean`.
    - totalDonated: `number`.
    - totalBackers: `number`. 
    - errorCode: `number`.

```javascript
const params = {
  storeId: "id"
}

const body = [""];

const addCauseResult = await polen.addCause(params, body);
console.log(addCauseResult);
```

## Create Store
Este método cria uma nova loja.

- Recebe o argumento `params` que é um objeto com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.

- Recebe o argumento `payload` que é um objeto com os campos:
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
   - `test`: (opcional) usado para contabilizarmos as doações feitas nesta loja - `boolean`.
   - `active`: (opcional) usado para ativar a loja - `boolean`.
   - `platformId`: (opcional) id da plataforma - `string`.

- Retorna um objeto:
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

```javascript
const params = {
  companyId: ""
}

const body = {
  email: "",
  storeUrl: "",
  storeName: "",
  tags: [
    ""
  ],
  domain: "",
  nameContact: "",
  phone: "",
  document: "",
  logo: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  platformId: "",
  test: false,
  active: false
}

const create = await polen.createStore(params, body);
console.log(create);
```

## Remove Cause Store
Este método remove causas de uma loja.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `payload` que é um array:
    - `Array de string`: lista de ids das causas ou instituições que serão removidas - `array`.

- Retorna um objeto:
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


```javascript
const params = {
  storeId: "id"
}

const body = [""];

const removeCause = await polen.removeCause(params, body);
console.log(removeCause.content);
```
