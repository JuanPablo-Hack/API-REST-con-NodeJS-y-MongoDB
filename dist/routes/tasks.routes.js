"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Declaramos un objeto con la funcion de Router
var router = (0, _express.Router)();
router.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var db, resultado;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.collection('tasks').find({}).toArray();

          case 5:
            resultado = _context.sent;
            //Mandamos a llamar el resultado
            //console.log(resultado);
            res.json(resultado);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var db, tarea, resultado;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context2.sent;
            //Creamos los datos de las tareas
            tarea = {
              title: req.body.title,
              description: req.body.description
            }; //Insertamos los datos dentro de la base de datos

            _context2.next = 6;
            return db.collection('tasks').insert(tarea);

          case 6:
            resultado = _context2.sent;
            //Vemos los datos
            //console.log(JSON.stringify(req.body,null,2));
            res.send(resultado.ops[0]);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //Funcion para pedir los datos con el id de referencia

router.get('/:id',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, db, resultado;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //Mandamos llamar al id dentro de los parametros del request
            id = req.params.id; //Mandaremos llamar los datos del id

            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context3.sent;
            _context3.next = 6;
            return db.collection('tasks').findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            resultado = _context3.sent;
            console.log(JSON.stringify(resultado, null, 2));
            res.json(resultado);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()); //Creamos la funcion de eliminar

router["delete"]('/:id',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, db, resultado;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //Declaramos el id
            id = req.params.id; //Nos conectamos con la base de datos

            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context4.sent;
            _context4.next = 6;
            return db.collection('tasks').deleteOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            resultado = _context4.sent;
            //Mandamos el resultado
            res.json({
              mensaje: "Tarea ".concat(id, " elminada"),
              resultado: resultado
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()); //Creamos las funcion de PUT

router.put('/:id',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, actualizarTarea, db, resultado;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //Mandamos llamar el id
            id = req.params.id; //Datos a actualizar

            actualizarTarea = {
              title: req.body.title,
              description: req.body.description
            }; //Nos conectamos con la base de datos

            _context5.next = 4;
            return (0, _database.connect)();

          case 4:
            db = _context5.sent;
            _context5.next = 7;
            return db.collection('tasks').updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: actualizarTarea
            });

          case 7:
            resultado = _context5.sent;
            //Generamos una respuesta
            res.json({
              mensaje: "Tarea ".concat(id, " elminada")
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;