/* const prod1 = {
    nome: 'massas',
    preco: 45
}

const prod2 = {
    nome: 'massas',
    preco: 1234
}*/



//uma função factory (ou função fábrica) é uma função que cria e retorna um novo objeto, em vez de usar construtores com a palavra-chave new ou classes, você pode usar funções factory para produzir objetos personalizados
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Moreira'
    }
}

console.log(criarPessoa())

