import multer from 'multer';
import multerConfig from '../config/multerConfig';

import File from '../models/File';

const upload = multer(multerConfig).single('archive');

class FileController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const file = await File.create({ originalname, filename, aluno_id });

        return res.json(file);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno doesn`t exist.'],
        });
      }
    });
  }
}

export default new FileController();
