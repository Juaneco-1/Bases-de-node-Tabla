const { Module } = require("module");
const fs = require('fs')
const colors= require('colors');

const crearArchivo=(base=5,listar=false,hasta)=>{

    
    let salida='';
    let consola='';
    for(let i =1 ;i<=hasta;i++){
    
        salida += `${base} X ${i} = ${base*i}\n`;
        consola +=`${base}`.green +` X `.yellow+`${i}`.red+` = ${base*i}\n`.blue//Para ponerle colores con los Yargs

    }
    if(listar){
        console.clear();
        console.log('========================='.rainbow);
        console.log(`   Tabla del ${base}`.trap)
        console.log('========================='.rainbow);
        
        console.log(consola);
    }
    
    return new Promise((resolve,reject)=>{
        
        

        try {
            fs.writeFileSync(`./Salida/Tabla del ${base}.txt`,salida)//Agarrar el error con try catch
            //console.log(`Tabla del ${base} creada`)
            resolve (`Tabla del ${base}.txt`)
        } catch (error) {
            reject(error)
        }


    })
    

}

module.exports ={
    crearArchivo
}