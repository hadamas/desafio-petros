// ****************************************************************************
//                                                                              //
//                                                         :::      ::::::::    //
//    Desafio-Petros                                     :+:      :+:    :+:    //
//                                                     +:+ +:+         +:+      //
//    By: ahadama- <ahadama-@42.rio>                    +#+  +:+     +#+        //
//                                                 +#+#+#+#+#+   +#+            //
//    Created: 2024/07/28 17:17:51 by ahadama-          #+#    #+#              //
//    Updated: 2024/07/29 10:58:00 by ahadama-         ###   ########.fr        //
//                                                                              //
// ****************************************************************************

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv');
const apiUrl = 'https://brasilapi.com.br/api/cvm/corretoras/v1';
const filePath = path.join('c:', 'temp', 'corretoras-ativas.csv');


const ensureDirectoryExistence = filePath => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const fetchAndSaveCorretoras = async () => {
  try {

    ensureDirectoryExistence(filePath);

    const response = await axios.get(apiUrl);
    const corretoras = response.data;

    const corretorasAtivas = corretoras.filter(corretora => corretora.status !== 'CANCELADA');

    const csv = parse(corretorasAtivas);

    fs.writeFileSync(filePath, csv, 'utf8');

    console.log('Arquivo CSV criado com sucesso em:', filePath);
  } catch (error) {
    console.error('Erro ao buscar dados ou criar CSV:', error);
  }
};

fetchAndSaveCorretoras();
