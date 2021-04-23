---
id: node-install
title: Adicionando ao seu projeto
sidebar_label: Adicionando ao seu projeto
---
A instalação da PolenAPI é feita de forma simples conforme os passos descritos a seguir.

## Requisitos

- Versão do NodeJS: Deve ser igual a 12 ou superior (que pode ser verificado executando `node --version`).
- Gerenciador de pacotes NPM ou Yarn 

## Instalação

A maneira mais fácil de instalar a PolenAPI é usar a ferramenta de linha de comando. Você pode executar este comando em qualquer lugar em um novo repositório ou dentro de um repositório existente.
Você pode encontrar essa e várias outras bibliotecas em nossos [repositórios](/).
```shell
npm install linkDoGit
```

## Como usar
Após a instalação você pode fazer a importação para o seu projeto através do `import` e fazer uma instância da classe `PolenAPI` passando um token de acesso. Esse token pode ser encontrado no [painel do polinizdor](https://painel.opolen.com.br/).


```javascript
import { polenAPI } from "polenSdk";

const polen = polenAPI("token");
```