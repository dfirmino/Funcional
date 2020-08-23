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

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos
}