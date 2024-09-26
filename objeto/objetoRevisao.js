// objeto é uma coleção dinamica de pares chave/valor
const produto = new Object 
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Belchior',
        idade: 20,
        endereco: {
            logradou3ro: 'rua',
            numero: 12
        }
    }, 
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }], 
    calcularValorSeguro: function(){
        //...
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida'
console.log(carro)


delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //undefined
console.log(carro.condutores.length) //erro - verificar se está definido ou não