import express from 'express'

//Mandamos llamar a las rutas
import rutas from "./routes/index.routes";
import tareas from "./routes/tasks.routes"
//Iniciamos express
const app = express();
//Ajustes
app.set('port', process.env.PORT || 3000);
//Creamos los middlewares
app.use(express.json());      
//Usamos las rutas
app.use(rutas);
app.use('/tasks',tareas);


export default app;