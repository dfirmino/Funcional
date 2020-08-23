const path = require('path')
const fn = require("./funcoes");

const caminho = path.join(__dirname, 'Game_of_Thrones_season1');

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(caminhos => fn.lerArquivos(caminhos))
    .then(conteudos => conteudos.join(''))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(console.log)
    .catch(console.log)