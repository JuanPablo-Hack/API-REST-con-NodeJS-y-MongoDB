//Importamos la funcion Router de express
import { Router } from "express";
//Conexion de la base de datos
import { connect } from "../database";
//Importamos una funcion de mongodb ObjectId
import { ObjectID } from "mongodb";
//Declaramos un objeto con la funcion de Router
const router = Router();
router.get('/', async(req,res)=>{
    //Nos conectamos con la base de datos
    const db = await connect();
    //Hacemos una consulta de las colecciones
    const resultado = await db.collection('tasks').find({}).toArray();
    //Mandamos a llamar el resultado
    //console.log(resultado);
    res.json(resultado); 
});
router.post('/', async(req,res)=>{
    //Nos conectamos con la base de datos
    const db = await connect();
    //Creamos los datos de las tareas
    const tarea ={
        title: req.body.title,
        description: req.body.description
    };
    //Insertamos los datos dentro de la base de datos
    const resultado = await db.collection('tasks').insert(tarea);
    //Vemos los datos
    //console.log(JSON.stringify(req.body,null,2));
    res.send(resultado.ops[0]);
});
//Funcion para pedir los datos con el id de referencia
router.get('/:id',async (req,res)=>{
    //Mandamos llamar al id dentro de los parametros del request
    const {id} = req.params;
    //Mandaremos llamar los datos del id
    const db = await connect();
    const resultado = await db.collection('tasks').findOne({_id:ObjectID(id)});
    console.log(JSON.stringify(resultado,null,2));
    res.json(resultado);
});
//Creamos la funcion de eliminar

router.delete('/:id',async (req,res)=>{
    //Declaramos el id
    const {id} = req.params;
    //Nos conectamos con la base de datos
    const db = await connect();
    //Creamos la peticion
    const resultado = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
    //Mandamos el resultado
    res.json({
        mensaje: `Tarea ${id} elminada`,
        resultado
    })
});
//Creamos las funcion de PUT
router.put('/:id',async (req,res)=>{
    //Mandamos llamar el id
    const {id} = req.params;
    //Datos a actualizar
    const actualizarTarea = {
        title: req.body.title,
        description: req.body.description
    };
    //Nos conectamos con la base de datos
    const db = await connect();
    //Creamos la peticion
    const resultado = await db.collection('tasks').updateOne({_id: ObjectID(id)},{$set:actualizarTarea});
    //Generamos una respuesta
    res.json({
        mensaje: `Tarea ${id} elminada`
    })
});


export default router;