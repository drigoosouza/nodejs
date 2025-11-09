import fs from "node:fs"

const nameagurment={}
const ob = {}
const arg = process.argv.slice(2)

arg.forEach((param,index,array)=>{
    
    if (param.startsWith("--")){
        const agrName = param.slice(2)
        const agrValue = array[index+1]
        nameagurment[agrName] = agrValue
    }
    
})


console.log(nameagurment)


