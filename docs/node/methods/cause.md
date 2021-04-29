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

- Retorna um objeto :
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.
    

```javascript
const allCause = await polen.getAllCauses();
console.log(allCause);
```

## Get Category
Este método retorna todas as categorias de causas cadastradas no Polen.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto :
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.
    
```javascript
const categories = await polen.getCategories();
console.log(categories);
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

- Retorna um objeto:
   
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.
```javascript
const params = {
  'storeId': "id"
}

const ownCauses = await polen.getOwnCauses(params);
console.log(ownCauses);
```
