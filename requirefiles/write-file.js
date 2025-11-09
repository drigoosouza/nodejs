const fs = require("node:fs")

const data = new Uint8Array(Buffer.from('Hello Node.js'))
fs.writeFile("arquivo.txt",data,(error)=>{
    if (error){
        console.log("erro ao criar arquivo", error.name)
    }

    console.log("arquivo criado")
})