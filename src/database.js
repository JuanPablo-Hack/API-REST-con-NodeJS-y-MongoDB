import MongoClient from "mongodb";

//Funcion para conectarnos con mongodb
export async function connect (){
    try{
        //Creamos la variable cliente para manipular la base de datos
        const cliente = await MongoClient.connect('mongodb://localhost:27017',{ 
            useUnifiedTopology: true 
        });
        //Creamos o seleccionamos la base de datos
        const db = cliente.db('node-restapi');
        //Comentamos que la base de datos esta conectada
        console.log('Base de datos conectada con exito');
        //Retornamos la base de datos
        return db;
    } catch(e){
        console.log(e); 
    }
    
}
