const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1233.99,
    desconto: 0.20
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})