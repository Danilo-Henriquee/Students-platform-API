"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);

/*
O método index é responsável por criar um novo aluno no banco de dados
e retornar esse aluno em formato JSON
*/

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso'],
      order: [['id', 'DESC'], [_File2.default, 'id', 'DESC']],
      include: {
        model: _File2.default,
        attributes: ['url', 'filename', 'originalname'],
      },
    });
    res.json(alunos);
  }

  async create(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Invalid or no existent ID.'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso'],
        order: [['id', 'DESC'], [_File2.default, 'id', 'DESC']],
        include: {
          model: _File2.default,
          attributes: ['url', 'filename', 'originalname'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno doesn`t exists.'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Invalid or no existent ID.'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno doesn`t exists.'],
        });
      }

      const newAluno = await aluno.update(req.body);

      return res.json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Invalid or no existent ID.'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno doesn`t exists.'],
        });
      }

      await aluno.destroy();
      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
