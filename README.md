## Why Food?

Aplicação desenvolvida como teste prático para cargo de FrontEnd.

## Requisitos

[Descrição](https://api-teste-frontend.luan-nuvem.now.sh/)

## Sobre

* Projeto iniciado com `create-react-app` utilizando gerenciador de pacotes Yarn.

## Issues
* Por conta de problemas para acessar a API com erro de CrossDomain, foi necessário
  instalar um [plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) no Chrome para testar;
* A aplicação lista os produtos, ao selecionar um produto é possível ver as opcões
  para mesmo e um estado é salvo com os itens obrigatórios em `orders`;
* O estado `totalPrice` soma os valores em `price` no evento `onChangeCapture` das opções
  obrigatórias de cada produto, mas ainda subtrai as opções deselecionadas.
