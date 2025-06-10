const basicInfo = require('./basicInfo.js');
const components = require('./components');
const endpoints = require('./endpoints.js');
const middlewares = require('./middlewares.js');

module.exports = {
    ...basicInfo,
    ...components,
    ...endpoints,
    //...middlewares
};
