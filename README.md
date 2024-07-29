# Desafio Petros - Projeto de Catalogação de Corretoras
Este repositório foi criado por *Alanis Hadama*. 

## Descrição

Este projeto é uma aplicação feita em Node.js que a listar as corretoras de valores ativas na CVM. Ele pega as informações da API do Brasil API, filtra as corretoras ativas e salva esses dados em um arquivo CSV no diretório 'c:\temp' no computador.

## Funcionalidades

- Faz uma requisição GET à API da CVM para obter dados das corretoras.
- Filtra as corretoras ativas, desconsiderando aquelas com o status "CANCELADA".
- Converte os dados filtrados para o formato CSV.
- Salva os dados no arquivo CSV em `c:\temp\corretoras-ativas.csv`, sobrescrevendo o arquivo se ele já existir.

## Requisitos para rodar o projeto

- [Node LTS](https://nodejs.org/en)

## Como rodar na minha máquina?

1. Clone o repositório:

   ```bash
   git clone https://github.com/hadamas/desafio-petros.git desafio-petros
2. Acesse o diretório do projeto:
    ```bash
    cd desafio-petros
3. Instale as dependências necessárias:
    ```bash
    npm install
4. Execute o script:
    ```bash
    node index.js
- Caso a pasta 'temp' tem não existir no diretório 'c:\', ela será criada.
- O arquivo CSV será gerado no caminho 'c:\temp\corretoras-ativas.csv'

## Estrutura do Código
- index.js: Contém o código principal que realiza a requisição à API, filtra os dados, converte para CSV e salva o arquivo.

- package.json: Lista as dependências do projeto e configurações básicas.

### Dependências
- axios: Biblioteca para fazer requisições HTTP.
- json2csv: Biblioteca para converter JSON para CSV.

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Para contribuir:

**Faça um fork do repositório.**
1. Crie uma branch para sua feature ou correção.
2. Faça commit das suas alterações.
3. Envie um pull request.

### Contato
Para mais informações, entre em contato alanis.hadama@gmail.com
