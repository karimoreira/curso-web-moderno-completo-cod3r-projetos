const alunos = [
    { nome: 'Joao', nota: 7.9},
    { nome: 'Maria', nota: 9.2},
    { nome: 'José', nota: 8.9},
    { nome: 'Vini', nota: 9.9},
    { nome: 'Atílio', nota: 7.1}
]

//imperativo
let total1 = 0
for (var i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//declarativo 
const getNota = aluno => aluno.nota 
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//exemplo - select codigo, email, from clientes where ativo = 1 
//sql é declarativo 
//aula 144 