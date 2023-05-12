import { Sequelize } from 'sequelize';

// configurações do banco de dados
import databaseConfig from '../config/database';

// nesse arquivo devera conter todos os models
import Aluno from '../models/Aluno';
import User from '../models/User';
import File from '../models/File';

// nesse array devera conter todos os models
const models = [Aluno, User, File];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
