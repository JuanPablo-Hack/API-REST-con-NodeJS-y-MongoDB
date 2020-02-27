import "@babel/polyfill"
//Importo el servidor al archivo principal
import server from "./server";
//Vamos a importar la conexion con la base de datos
//import { connect } from "./database";

//Creo una funcion principal para mandar llamar respuestas del servidor
async function main(){
    //Mando a llamar el servidor en el puerto 3000
    await server.listen(server.get('port'));
    //await connect();
    console.log('Server on port',server.get('port'));
}
//Ejecuto main
main();
