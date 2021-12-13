---
id: finance
title: Finance
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Finance Billing List
Este método retorna todas as suas faturas de pagamento.

- Recebe os argumento:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.
    - `storeId`: (obrigatório) id da loja - `string`.
    - `startDate`: (opcional) data incicial - `string`.
    - `endDate`: (opcinal) data final - `string`.

- Retorna um json:
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.
    
```csharp
var list = await polen.Finance.GetBilling(storeId);
Console.Write(list);
```
