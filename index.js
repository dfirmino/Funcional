const path = require('path')
const fn = require("./funcoes");

const caminho = path.join(__dirname, 'Game_of_Thrones_season1');

const simbolos = [
    '.', '?', '-', ',', '"',, '_','<i>', '</i>',
    '\r','[', ']','(', ')'
]

function agruparPalavras(palavras) {
    return Object.values( palavras.reduce( (acum, palavra) => {
        const p = palavra.toLowerCase()
        const qtd = acum[p] ? acum[p].qtd + 1 : 1
        acum[p] = { elemento: p, qtd }
        return acum
    }, {}) )
}

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(caminhos => fn.lerArquivos(caminhos))
    .then(fn.mesclarConteudos)
    .then(fn.separarPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarConteudos)
    .then(fn.separarPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumero)
    .then(agruparPalavras)
    .then(fn.ordernarPorAtributo('qtd', 'desc'))
    .then(console.log)
    .catch(console.log)