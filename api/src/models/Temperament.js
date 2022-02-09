const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    // defino el modelo

   //Defino el modelo / tabla temperamento 
   sequelize.define("temperament", {
    // id: {
    //   //type: DataTypes.INTEGER,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   primaryKey: true
    // },
    name: {
      type: DataTypes.STRING,
     get() {
       
      return this.getDataValue("name");
    }
  }
  });
}