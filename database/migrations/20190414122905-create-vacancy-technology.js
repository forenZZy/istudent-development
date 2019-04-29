"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("VacancyTechnologies", {
      vacancyID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      technologyID: {
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
    return queryInterface.dropTable("VacancyTechnologies");
  }
};
