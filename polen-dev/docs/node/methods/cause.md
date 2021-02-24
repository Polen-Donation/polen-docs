---
id: cause
title: Cause
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get All Causes
Este método retorna todas as instituições cadastradas no Polen.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 100) - `number`.

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status`: status da requisição.

```javascript
const params = {
  page: 20,
  pageSize: 50
}

const allCause = polen.getAllCause(params)
console.log(allCause.data)
```

## Get Category
Este método retorna todas as categorias de causas cadastradas no Polen.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: número de uma página especifica - `number`.
    - `pageSize`: quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status`: status da requisição.
```javascript
const params = {
  page: 0,
  pageSize: 5
}

const categories = polen.getCauseCategory(params)
console.log(categories.data)
```

## Get Own Causes
Este método retorna as causas apoiadas por uma loja.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `userId`: (opcional) filtra por instituições que o consumidor já apoiou - `string`.
    - `city`: (opcional) filtra por cidade - `string`.
    - `state`: (opcinal) filtra por estado - `string`.
    - `onlySelected`: (opcional) filtra por instituições selecionadas pelo usuário - `boolean`.

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status`: status da requisição.
```javascript
const params = {
  'storeId': "id"
}

const ownCauses = polen.getOwnCause(params)
console.log(ownCauses.data)
```