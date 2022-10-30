const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      // type: DataTypes.UUID,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      // defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      // get(){
      //   return `db-${this.id}`
      // }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.STRING,
      // type: DataTypes.ARRAY( DataTypes.STRING ),
      allowNull: false
    },
    nivelDeComida: {
      type: DataTypes.STRING
    },
    pasoAPaso: {
      type: DataTypes.STRING
    }
  },{
    timestamps: false,
    // timestamps: true,
    // createdAt: 'creado',
    // updatedAt: false
  });
};
