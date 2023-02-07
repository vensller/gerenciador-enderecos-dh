const database = require("../database/models");
const jwt = require("jsonwebtoken");

const usuariosController = {
  create: async (req, res) => {
    const { nome, email, senha } = req.body;
    const user = await database.usuarios.create({
      nome,
      email,
      senha,
    });
    res.json({ id: user.id, nome, email });
  },
  read: async (req, res) => {
    let usuarios = await database.usuarios.findAll();
    res.json(usuarios);
  },
  update: async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;
    await database.usuarios.update(
      {
        nome,
        email,
        senha,
      },
      {
        where: {
          idUsuario: id,
        },
      }
    );
    res.json({ id, nome, email });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await database.usuarios.destroy({
      where: {
        idUsuario: id,
      },
    });
    res.send("ok");
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await database.usuarios.findOne({
      where: {
        email,
        senha: password,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      {
        id: user.idUsuario,
        name: user.nome,
        email: user.email,
      },
      "MINHA_CHAVE_ULTRA_SECRETA"
    );

    return res.json({ token });
  },
};
module.exports = usuariosController;
