const fs = require ('node:fs')

fs.readFile("arquivo.txt","utf-8",(error,data)=>{
    if (error){
        console.log(error.message)
        return
    }

    console.log (data)
})