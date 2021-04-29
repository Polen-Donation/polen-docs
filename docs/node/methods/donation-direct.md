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
    - `bankFeeCovered`: taxa de serviços - `number`
    - `hasMatchFunding`: caso em que usuário doa, a marca também doa - `boolean`.
    - `matchingDonation`: o valor que a marca doará - `number`.
    - `notes`: notas de observação - `string`.

- Retorna um objeto:
      - transactionId: `string`.
      - storeId: `string`.
      - storeUrl: `string`.
      - orderId: `string`.
      - donation: `number`.
      - userDonation: `number`.
      - purchase: `number`.
      - ngoId: `string`.
      - ngoName: `string`.
      - userId: `string`.
      - polenUserId: `string`.
      - userEmail: `string`.
      - status: `string`.
      - tags: `array`.
      - createAt: `string`.
```javascript
const body = {
  storeId: "",
  childStoreId: "",
  isTest: false,
  campaignId: "00000000-0000-0000-0000-000000000000",
  paymentMethod: 0,
  orderId: "",
  bankFeeCovered: -100000000,
  hasMatchFunding: false,
  matchingDonation: -100000000,
  notes: "",
  donor: {
    identifier: "",
    email: "",
    name: "",
    phone: "",
    document: "",
    gender: "",
    birthDate: "",
    verified: false,
    optIn: false
  },
  creditCardData: {
    paymentSystem: 0,
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    installmentQuantity: -100000000
  },
  bankSlipData: {
    paymentSystem: 0,
    dueDate: -100000000
  },
  address: {
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    country: ""
  },
  causes: [
    {
      causeId: "",
      donation: -100000000
    }
  ]
}

const donation = await polen.createDirectDonation(body);
console.log(donation);
```
