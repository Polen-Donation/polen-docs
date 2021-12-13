---
id: platform
title: Platform
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Platform List
Este método retorna todas as plataformas parceiras que o Polen já possui integração nativa.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.


- Retorna um json:
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.
  
```csharp
var list = await polen.Platform.getPlatform();
Console.Write(list);
```
