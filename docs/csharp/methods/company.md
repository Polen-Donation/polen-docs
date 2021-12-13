---
id: company
title: Company
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Company Details
Este método retorna os detalhes de uma empresa específica.

- Recebe o argumento:
    - `companyId`: (obrigatório) id da Empresa - `string`.

- Retorna um json:
  - id: `string`.
  - document: `string`.
  - name: `string`.
  - logo: `string`.
  - url: `string`.
  - segment: `string`.

```csharp
var companyDetail = await polen.Company.GetCompanyDetails(companyId);
Console.Write(companyDetail);
```

## Get Company List
Este método retorna todas as empresas da sua conta.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.

- Retorna um json:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `int`.
        - nextPage: `string`.
    - `status`: status da requisição.

```csharp
var list = await polen.Company.GetCompanyList();
Console.Write(list);
```

## Get Company Store
Este método retorna todas as lojas de uma empresa.

- Recebe os argumentos:
    - `companyId`: (obrigatório) id da empresa - `string`.
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.

- Retorna um json:
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.

```csharp
var stores = await polen.Company.GetCompanyStores(params);
Console.Write(stores);
```

## Update Company
Este método atualiza dados de uma empresa.

- Recebe o argumento `params` que é um objeto com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`:(obrigatório) nome da empresa - `string`.
    - `logo`: (opcional) url da logo da empresa - `string`.
    - `url`: (opcional) url da página de impacto da empresa - `string`.
    - `segment`: (opcional) segmento da empresa - `string`.

- Retorna um json:
    - id: `string`.
    - document: `string`.
    - name: `string`.
    - logo: `string`.
    - url: `string`.
    - segment: `string`.
    

```csharp
var update = await polen.Company.UpdateCompany(companyId, body);
console.log(update);
```

## Create Company
Este método cria uma empresa.

- Recebe os argumentos :
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`: nome da empresa - `string`.
    - `logo`: url da logo da empresa -  `string`.
    - `url`: url da página de impacto da empresa - `string`.
    - `segment`: segmento da empresa - `string`.

- Retorna um json:
    - id: `string`.
    - document: `string`.
    - name: `string`.
    - logo: `string`.
    - url: `string`.
    - segment: `string`.

```csharp
var create = await polen.Company.CreateCompany(body);
Console.Write(create);
```
