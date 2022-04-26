import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const getRenderAst = (astDiff) => {
  const iter = (keyData, path = []) => {
    const currentPath = [[...path, keyData.name].join('.')];
    switch (keyData.state) {
      case 'added': {
        return `Property '${currentPath}' was added with value: ${stringify(keyData.value)}`;
      }
      case 'deleted': {
        return `Property '${currentPath}' was removed`;
      }
      case 'changed': {
        return `Property '${currentPath}' was updated. From ${stringify(keyData.obj1Value)} to ${stringify(keyData.obj2Value)}`;
      }
      case 'unchanged': return [];
      case 'nested': {
        return keyData.children.flatMap((child) => iter(child, currentPath));
      }
      default:
        throw new Error(`${keyData.state} - unknown state!`);
    }
  };
  return astDiff.flatMap((keyData) => iter(keyData)).join('\n');
};

export default getRenderAst;
