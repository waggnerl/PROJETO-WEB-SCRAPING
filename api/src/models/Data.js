const Sequelize= require("sequelize");
const  { Model } = require("sequelize");

module.exports = class Data extends Model {
  static init(sequelize) {
    super.init(
      { 
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        site: {
          type: Sequelize.STRING,
          defaultValue: "",
        },               
      },
      {
        sequelize,
      }
    );
    return this;
  }

  
}
