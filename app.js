
const argv=require('./config/yargs')
const colors= require('colors');//Para los colores de la consola
const {crearArchivo} = require('./helpers/multiplicar')
console.clear();
/* let base =4;
console.clear();
console.log('=========================');
console.log(`   Tabla del ${base}`)
console.log('=========================');

let salida='';
for(let i =1 ;i<=10;i++){

    salida += `${base} X ${i} = ${base*i}\n`
}
console.log(salida);
fs.writeFile(`Tabla del ${base}.txt`,salida,(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo creado');
}); */

//const base=100;

//console.log(process.argv); // Para ver lo que se puso en consola
crearArchivo(argv.b,argv.l,argv.h)
.then(archivo => console.log(archivo.rainbow ,'Creado'))
.catch(e => console.log(e));


//console.log(argv)

console.log('Base yargs: ',argv.base);

