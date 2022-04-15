import stylish from './stylish.js';

const formatters = { stylish };

export default (ast, formatName) => formatters[formatName](ast);
