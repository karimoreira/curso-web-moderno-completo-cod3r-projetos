// pessoa -> endereco123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)



//pessoa -> endereco456 -> {...}
//pessoa = { nome: 'Ana'} erro, pois a atribuicao acima foi para .nome, pessoa é constante

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Maria'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa) 


const pessoaConstante = Object.freeze({ nome: 'Jõao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)