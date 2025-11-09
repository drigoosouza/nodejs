const fs = require('node:fs')

function createfile(data){
    fs.writeFile("meuarquivo.txt", data, 'utf-8', (erro)=>{
        if(erro){
            console.log(erro.message)
            return
        }
        console.log("arquivo criado com sucesso")
    })
}

module.exports = createfile