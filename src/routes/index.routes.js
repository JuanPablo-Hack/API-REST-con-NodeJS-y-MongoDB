//Importamos Router de express
import { Router } from "express";
//Creamos un objeto y mandamos llamar a la funcion Router
const router = Router();

//Rutas
router.get('/',(req,res)=>{
    res.send('Bienvenido a mi API');
});

//Exportamos ese objeto
export default router;