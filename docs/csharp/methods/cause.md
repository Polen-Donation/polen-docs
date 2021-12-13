---
id: cause
title: Cause
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get All Causes
Este método retorna todas as instituições cadastradas no Polen.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 100) - `int`.

- Retorna um json :
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.
    

```csharp
var allCause = await polen.Cause.GetAllCauses();
Console.Write(allCause);
```

## Get Category
Este método retorna todas as categorias de causas cadastradas no Polen.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.

- Retorna um json :
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.
    
```csharp
var categories = await polen.Cause.GetCategories();
Console.Write(categories);
```

## Get Own Causes
Este método retorna as causas apoiadas por uma loja.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `userId`: (opcional) filtra por instituições que o consumidor já apoiou - `string`.
    - `city`: (opcional) filtra por cidade - `string`.
    - `state`: (opcinal) filtra por estado - `string`.
    - `onlySelected`: (opcional) filtra por instituições selecionadas pelo usuário - `bool`.

- Retorna um json:
   
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.
```csharp
var ownCauses = await polen.getOwnCauses(storeId);
Console.Write(ownCauses);
```
