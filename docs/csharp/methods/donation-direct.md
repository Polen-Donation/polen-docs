---
id: donation-direct
title: Donation Direct
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Create Donation Direct
Este método cria uma doação direta.

- Recebe o argumento `body` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da empresa - `string`.
    - `paymentMethod`: (obrigatório) forma de pagamento - `number`.
    - `donor`: (obrigatório) dados do doador - `object`.
    - `creditCardData`: (obrigatório para pagamento c/ cartão de crédito) dados do cartão de crédito - `object`.
    - `bankSlipData`: (obrigatório para pagamento c/ boleto) dados para gerar boleto - `object`.
    - `address`: (opcinal) endereço do doador - `object`.
    - `causes`: (obrigatório) causas que deseja apoiar - `array`.
    - `childStoreId`:(opcional) lojas segmento - `array`.
    - `orderId`: id para identificação da doação - `string`.
    - `bankFeeCovered`: taxa de serviços - `float`
    - `hasMatchFunding`: caso em que usuário doa, a marca também doa - `boolean`.
    - `matchingDonation`: o valor que a marca doará - `float`.
    - `notes`: notas de observação - `string`.

- Retorna um json:
      - transactionId: `string`.
      - storeId: `string`.
      - storeUrl: `string`.
      - orderId: `string`.
      - donation: `float`.
      - userDonation: `float`.
      - purchase: `float`.
      - ngoId: `string`.
      - ngoName: `string`.
      - userId: `string`.
      - polenUserId: `string`.
      - userEmail: `string`.
      - status: `string`.
      - tags: `array`.
      - createAt: `string`.
```csharp
var donation = await polen.DirectDonation.CreateDirectDonation(body);
Console.Write(donation);
```
