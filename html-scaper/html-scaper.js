const fs = require("node:fs")
const path = require("node:path")   
const readline = require("node:readline")


function escaparHtmldaPagina(text){
    return text.replace(/[<>&]/g, (caracter)=>{
        switch(caracter){
            case '<':
                return "&lt";
            case  '>':
                return "&gt";
            case '&':
                return "&amp";
            default:
                return caracter;
        }
    })
}


function aooaoa(){
    
}
