const fs = require('node:fs')

function deleteFile(){
    fs.unlink("meuarquivo.txt",(erro)=>{
        if(erro)
            console.log(erro.message)
    })
}

module.exports = deleteFile