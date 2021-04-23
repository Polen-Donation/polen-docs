---
id: finance
title: Finance
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Finance Billing List
Este método retorna todas as suas faturas de pagamento.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) id da loja - `string`.
    - `startDate`: (opcional) data incicial - `string`.
    - `endDate`: (opcinal) data final - `string`.

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

const list = polen.getFinanceBillingList(params)
console.log(list.data)
```
