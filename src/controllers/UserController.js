import User from '../models/User';

/*
O método index é responsável por criar um novo User no banco de dados
e retornar esse User em formato JSON
*/
class UserController {
  // PADRÂO CRUD

  // CREATE
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // READ - show all
  async index(req, res) {
    try {
      // Dessa forma passando os atributos ele só trás esses dados
      // do banco de dados
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  // READ - show one by ID
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User doesn`t exists'],
        });
      }

      const newDates = await user.update(req.body);
      const { id, nome, email } = newDates;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User doesn`t exists'],
        });
      }

      await user.destroy(req.body);

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
