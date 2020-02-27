"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

//Importamos Router de express
//Creamos un objeto y mandamos llamar a la funcion Router
var router = (0, _express.Router)(); //Rutas

router.get('/', function (req, res) {
  res.send('Bienvenido a mi API');
}); //Exportamos ese objeto

var _default = router;
exports["default"] = _default;