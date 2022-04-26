import stylish from './stylish.js';
import plain from './plain.js';

export default (ast, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(ast);
    case 'json':
      return JSON.stringify(ast);
    case 'stylish':
      return stylish(ast);
    default:
      throw new Error(`format - ${formatName} invalid`);
  }
};
