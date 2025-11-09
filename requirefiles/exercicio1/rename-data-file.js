const fs = require('node:fs')

function dataUpdate(data){
    fs.writeFile("meuarquivo.txt", data, "utf-8", (erro)=>{
        if(erro){
            console.log(erro.message)
            return
        }
        console.log("conteudo mudado com sucesso")
    })
}

module.exports=dataUpdate