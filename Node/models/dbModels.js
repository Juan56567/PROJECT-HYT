const { Sequelize, DataTypes } = require("sequelize");
const db = {};
const sequelize = new Sequelize("hyt", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});

db.init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.STRING,
  },
});

db.create = async () => {
  console.log("Este es el post");
  const newUser = await User.create({
    user: "test",
    password: "lapassword",
    name: "Name",
    rol: "este es el rol",
  });
};
module.exports = db;
 