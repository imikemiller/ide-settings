'use strict';
const schema = require('../schemas/${NAME}.schema');
module.exports = (sequelize, Sequelize) => {
  const ${StringUtils.firstLetterCaps(${NAME})} = sequelize.define('${StringUtils.firstLetterCaps(${NAME})}', schema.def(Sequelize), {});
  ${StringUtils.firstLetterCaps(${NAME})}.associate = function(models) {
    // associations can be defined here
  };
  return ${StringUtils.firstLetterCaps(${NAME})};
};