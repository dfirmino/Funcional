const path = require('path')
const fn = require("./funcoes");

const caminho = path.join(__dirname, 'Game_of_Thrones_season1');

const simbolos = [
    '.', '?', '-', ',', '"',, '_','<i>', '</i>',
    '\r','[', ']','(', ')'
]

const mesclarConteudos = array => array.join(' ')
const separarPorLinhas = array => array.split('\n')
const separarPorPalavras = array => array.split(' ')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(caminhos => fn.lerArquivos(caminhos))
    .then(mesclarConteudos)
    .then(separarPorLinhas)
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(mesclarConteudos)
    .then(separarPorPalavras)
    .then(fn.removerSeVazio)
    .then(console.log)
    .catch(console.log)