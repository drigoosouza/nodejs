const fs = require('node:fs')
const OS = require('node:os')
const path = require('node:path')
let sistemName, archSis, cpu, timeOn, mem

function log (name, arch, cpu, time, mem){

    const array = [name, arch, cpu, time, mem]
    const caminho = path.resolve(__dirname, '../../../', 'log', "log.txt")
    console.log(caminho)
    const arq = fs.writeFile(caminho,array.toString(),error=>{
        if (error){
            console.log(error.message)
        }
    })
}

function monitoring (){
    sistemName = OS.type()
    archSis = OS.arch()
    const cpusInt = OS.cpus()
    cpu = cpusInt[0].model
    timeOn = OS.uptime()
    mem = OS.freemem()

    console.log(sistemName)
    console.log(archSis)
    console.log(cpu)
    console.log(timeOn/3600)
    console.log(mem)

    log(sistemName, archSis, cpu, timeOn, mem)
}

setInterval(monitoring,1000)

