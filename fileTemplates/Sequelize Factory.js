const faker = require('faker');
const models = require('../../models');

const data = async (props = {}) => {
  const defaultProps = {
  
  };
  return Object.assign({}, defaultProps, props);
};

module.exports = async (props = {}) =>
  models.${MODEL}.create(await data(props));
