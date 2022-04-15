import _ from 'lodash';

const spacesCount = 4;

const map = {
  added: '+ ',
  deleted: '- ',
};

const getIndentAndMark = (currentDepth, keyState) => {
  const mark = _.has(map, [keyState]) ? map[keyState] : '  ';
  const indent = `${' '.repeat(currentDepth * spacesCount - 2)}${mark}`;
  return indent;
};

const stringify = (currentValue, depth) => {
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }
  const currentIndent = getIndentAndMark(depth);
  const bracketIndent = getIndentAndMark(depth - 1);
  const lines = Object
    .entries(currentValue)
    .map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`);
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const getRenderAst = (astDiff) => {
  const iter = (node, depth = 1) => {
    const arrStrs = node.map((keyData) => {
      switch (keyData.state) {
        case 'nested': {
          const renderChildren = iter(keyData.children, depth + 1);
          return `${getIndentAndMark(depth, [keyData.state])}${keyData.name}: {\n${renderChildren}\n${getIndentAndMark(depth)}}`;
        }
        case 'unchanged':
        case 'deleted':
        case 'added': {
          const renderValue = `${getIndentAndMark(depth, [keyData.state])}${keyData.name}: ${stringify(keyData.value, depth + 1)}`;
          return renderValue;
        }
        case 'changed': {
          const renderObj1Value = `${getIndentAndMark(depth, 'deleted')}${keyData.name}: ${stringify(keyData.obj1Value, depth + 1)}\n`;
          const renderObj2Value = `${getIndentAndMark(depth, 'added')}${keyData.name}: ${stringify(keyData.obj2Value, depth + 1)}`;
          const renderChangedValue = `${renderObj1Value}${renderObj2Value}`;
          return renderChangedValue;
        }
        default: {
          return 'Unknown state!';
        }
      }
    });
    return arrStrs.join('\n');
  };
  const renderAst = `{\n${iter(astDiff)}\n}`;
  return renderAst;
};

export default getRenderAst;
