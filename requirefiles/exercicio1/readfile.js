const fs = require('node:fs')

function read(){
    fs.readFile("meuarquivo.txt","utf-8",(erro,data)=>{
        if (erro){
            console.log("erro ao ler")
            return
        }
        console.log(data)
    })
}

module.exports=read