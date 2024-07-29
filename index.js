

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

// Função principal
const fetchAndSaveCorretoras = async () => {
  try {
    // Certificar-se de que o diretório existe
    ensureDirectoryExistence(filePath);

    // Fazer a requisição HTTP
    const response = await axios.get(apiUrl);
    const corretoras = response.data;

    // Filtrar corretoras ativas
    const corretorasAtivas = corretoras.filter(corretora => corretora.status !== 'CANCELADA');

    // Converter os dados para CSV
    const csv = parse(corretorasAtivas);

    // Escrever o arquivo CSV
    fs.writeFileSync(filePath, csv, 'utf8');

    console.log('Arquivo CSV criado com sucesso em:', filePath);
  } catch (error) {
    console.error('Erro ao buscar dados ou criar CSV:', error);
  }
};

// Executar a função
fetchAndSaveCorretoras();
