const { Sequelize, db } = require("../db");

// TODO - define the Band model
const { DataTypes } = require("sequelize");

const Band = db.define("Band", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  Band,
};
