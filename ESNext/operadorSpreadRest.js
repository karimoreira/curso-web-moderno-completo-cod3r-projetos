//operador ... rest(juntar)/spread(espalhar)
//usar resy com parametro de função

//usar spread com objeto 
const funcionario = { nome: 'Maria', salario: 78988.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

//spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)