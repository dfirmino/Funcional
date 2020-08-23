const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise( (resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }  
    })
}

function elementosTerminadosCom(array, padrao) {
    return array.filter(el => el.endsWith(padrao))
}

function lerArquivo(caminho) {
    return new Promise( (resolve,reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8'})
            resolve(conteudo)
        } catch (error) {
            reject(error)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerSeIncluir(padrao) {
    return function(array){
        return array.filter(el => !el.includes(padrao))
    }
}

function removerSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            let novoTexto = el
            simbolos.forEach(simbolo => {
                novoTexto = novoTexto.split(simbolo).join('')
            })
            return novoTexto
        })
    }
}

const mesclarConteudos = array => array.join(' ')

function separarPor(separador) {
    return function (texto) {
        return texto.split(separador)
    }
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarConteudos,
    separarPor
}