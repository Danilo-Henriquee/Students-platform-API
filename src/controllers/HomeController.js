import Aluno from '../models/Aluno';

/*
O método index é responsável por criar um novo aluno no banco de dados
e retornar esse aluno em formato JSON
*/
class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeController();
