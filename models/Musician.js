const { Sequelize, db } = require("../db");

// TODO - define the Musician model
const { DataTypes } = require("sequelize");

const Musician = db.define("Musician", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instrument: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  Musician,
};
