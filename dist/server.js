"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Mandamos llamar a las rutas
//Iniciamos express
var app = (0, _express["default"])(); //Ajustes

app.set('port', process.env.PORT || 3000); //Creamos los middlewares

app.use(_express["default"].json()); //Usamos las rutas

app.use(_index["default"]);
app.use('/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;