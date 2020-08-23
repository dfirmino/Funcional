const path = require('path')
const fn = require("./funcoes");

const caminho = path.join(__dirname, 'Game_of_Thrones_season1');

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(caminhos => fn.lerArquivos(caminhos))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerSeIncluir(linhas, '-->'))
    .then(linhas => fn.removerSeApenasNumero(linhas))
    .then(console.log)
    .catch(console.log)