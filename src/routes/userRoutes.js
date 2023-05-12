import Router from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', userController.index);// Lista usuarios
// router.get('/:id', userController.show);// Lista usuario

/*
Usuarios novos podem ser criados? Sim, portando o essa rota
deve estar livre de login, pois sem conta não tem login e sem
login não tem criação
*/
router.post('/', loginRequired, userController.create);

/*
Usuario pode atualizar seus dados? Sim, mas não escolhendo o
id que deseja atualizar, usuario só pode atualizar seus dados
*/
router.put('/', loginRequired, userController.update);

/*
Usuario pode deletar seus dados? Sim, mas não escolhendo o
id que deseja apagar, usuario só pode deletar seus dados
*/
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index => lista todos os usuarios => GET
store/create => cria um novo usuario => POST
delete => deleta um usuario => DELETE
show => mostra um usuario => GET
update => atualiza um usuario => PATCH ou PUT
*/
