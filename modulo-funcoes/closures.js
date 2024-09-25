//closure o é o escopo criado quando uma função é declarada
//esse escopo qpermite a função acessar e manipular variáveis externas à função

//contexto lexico em ação

const x = global 

function fora() {
    const x = 'Local'
    function dentro() {
            return x
        }

        return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)
