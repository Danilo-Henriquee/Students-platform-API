"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

/*
O método index é responsável por criar um novo aluno no banco de dados
e retornar esse aluno em formato JSON
*/
class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

exports. default = new HomeController();
