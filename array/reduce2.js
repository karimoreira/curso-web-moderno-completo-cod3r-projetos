const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Mariana', nota: 9.2, bolsista: true },
    { nome: 'Ada', nota: 9.8, bolsista: true },
    { nome: 'Belchior', nota: 8.7, bolsista: true }
]


//desafio 1: todos os alunos são bolsistas?
const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))


//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) 