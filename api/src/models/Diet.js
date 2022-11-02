const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    nombre: {
      type: DataTypes.STRING,
      // type: DataTypes.ARRAY( DataTypes.ARRAY ),
      allowNull: false,
    },
  },{
    timestamps: false
  });
};
