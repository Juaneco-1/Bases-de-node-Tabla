const argv=require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:false,
    describe:'Muestra la tabla en la consola'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero';
    }
    return true;
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'Es el numero hasta el que quieres que llegue la tabla'
})
.argv;
module.exports=argv;
    
