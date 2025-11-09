import fs, { readdir } from "node:fs/promises"
import path, { resolve } from "node:path"
import Readline from "node:readline"


const arg = process.argv.slice(2)

defineInlineOp()



async function newFile() {
    const namefile = await menu(`Assunto: `)
    const content = await menu(`Anotação: `)
    await fs.writeFile(`${namefile}.txt`, content, (error) => {
        if (error) {
            console.log(error.message)
            return
        }
    })
}

async function listFiles() {
    try {
        const arquivos = await fs.readdir(path.resolve("./"));
        const files = []
        let c = 0 
        arquivos.forEach((element, ind, array)=>{
            if(element.slice(-4)==='.txt'){
                files.push({id: c, file: element}) 
                c++
            }     
        })

        const mapfile = files.map((element)=>{
           return element.file
        })
        return files.length >0 ? console.log(mapfile) : console.log("não há anotações na pagina");
        
    } catch (err) {
        console.error('Erro ao ler o diretório:', err);
    }
}

function menu(question) {
    const rl = Readline.createInterface(process.stdin, process.stdout)
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

function defineInlineOp() {
    if (!arg[0]) {
        option()
    } else {
        arg.forEach((element, index, array) => {
            if (element.startsWith("--") && index == 0) {
                const op = element.slice(2)
                //console.log(op)
                opInLine(op)
            }
        })
    }
}

async function option() {
    const op = await menu(
        `
        1. Criar Anotações
        2. Lista Arquivos Salvos
        3. Ler Alguma Anotação Especifica
        4. Excluir Anotação
        
        Escolha uma opção: `)

    switch (op) {
        case '1':
            return newFile();
        case '2':
            await listFiles()
            return;
        case '3':
            return;
        case '4':
            return;
    }

    console.log(`valor inserido ${op}`)
}
async function opInLine(op) {


    switch (op) {
        case 'new':
            await newFile()
            break;
        case 'list':
            await listFiles()
            break;
        case 'read':
            console.log('ler')
            break;
        case 'del':
            console.log('deletar')
            break;

        default:
            break;
    }

}




