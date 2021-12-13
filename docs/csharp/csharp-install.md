---
id: csharp-install
title: Adicionando ao seu projeto
sidebar_label: Adicionando ao seu projeto
---
A instalação da PolenAPI é feita de forma simples conforme os passos descritos a seguir.

## Requisitos

- Versão do dotnet: Deve ser igual a 3.1 ou superior (que pode ser verificado executando `dotnet --version`). 

## Instalação

A maneira mais fácil de instalar a PolenAPI é usar a ferramenta de linha de comando. Você pode executar este comando em qualquer lugar em um novo repositório ou dentro de um repositório existente.
Você pode encontrar essa e várias outras bibliotecas em nossos [repositórios](/).
```shell
dotnet add package Polen.Charity.Donation.Api --version 1.0.2
```

## Como usar
Após a instalação você pode fazer a importação para o seu projeto através do `using` e fazer uma instância da classe `PolenApi` passando um token de acesso. Esse token pode ser encontrado no [painel do polinizdor](https://painel.opolen.com.br/).


```csharp
using Polen.Charity.Donation.Api;

public class MyClass 
{
    PolenApi polen = new PolenApi("token");
};
```
