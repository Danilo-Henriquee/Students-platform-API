"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        // se não for enviado, o valor sera uma string vazia
        defaultValue: '',
        // aqui vão ser inseridas todas as validações
        validate: {
          len: {
            // nesse array, o primeiro indice indica o numero
            // minimo de caracteres e o segundo o máximo
            args: [3, 255],
            // se a validação falhar essa mensagem sera exibida
            msg: 'Campo nome deve ter 3 a 255 caracteres.',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email ja existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres.',
          },
        },
      },
    }, {
      sequelize,
    });
    /*
    Aqui foi adicionando um gancho que antes de salvar 'beforeSave'
    ele vai pegar a senha passada e gerar um hash dela com bcrypt
    e atribuir o valor a password_hash ao banco de dados ja que
    o password que o usuario passa é virtual e não vai para o banco
    */
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
