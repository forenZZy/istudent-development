"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudentSkills", {
      studentID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      skillID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudentSkills");
  }
};
