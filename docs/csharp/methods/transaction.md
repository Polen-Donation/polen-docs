---
id: transaction
title: Transaction
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Update Status
Este método deve ser utilizado para atualizações posteriores à compra.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `orderId`: (obrigatório) id da doação - `string`.
    - `status`: (obrigatório) status da doação - `int`.

- Retorna um json:
    - transactionId: `string`.
    - storeId: `string`.
    - storeUrl: `string`.
    - orderId: `string`.
    - donation: `number`.
    - userDonation: `float`.
    - purchase `float`
    - ngoId `string`
    - ngoName `string`
    - userId `string`
    - polenUserId `string`
    - userEmail `string`
    - status `string`
    - tags `array`
    - createAt `string`
    
```csharp
var update = await polen.Transaction.UpdateTransaction(storeId, orderId, status);
Console.Write(update);
```
