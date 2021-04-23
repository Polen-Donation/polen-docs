---
id: platform
title: Platform
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Platform List
Este método retorna todas as plataformas parceiras que o Polen já possui integração nativa.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.


- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status`: status da requisição.
```javascript
const params = {
  storeId: "id"
}

const list = polen.getPlatformList(params)
console.log(list.data)
```