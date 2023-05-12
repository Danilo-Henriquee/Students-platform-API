"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express2.default)();

// Não deveria existir
router.get('/', _UserController2.default.index);// Lista usuarios
// router.get('/:id', userController.show);// Lista usuario

/*
Usuarios novos podem ser criados? Sim, portando o essa rota
deve estar livre de login, pois sem conta não tem login e sem
login não tem criação
*/
router.post('/', _loginRequired2.default, _UserController2.default.create);

/*
Usuario pode atualizar seus dados? Sim, mas não escolhendo o
id que deseja atualizar, usuario só pode atualizar seus dados
*/
router.put('/', _loginRequired2.default, _UserController2.default.update);

/*
Usuario pode deletar seus dados? Sim, mas não escolhendo o
id que deseja apagar, usuario só pode deletar seus dados
*/
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index => lista todos os usuarios => GET
store/create => cria um novo usuario => POST
delete => deleta um usuario => DELETE
show => mostra um usuario => GET
update => atualiza um usuario => PATCH ou PUT
*/
