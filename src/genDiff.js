import _ from 'lodash';

const getAstDiff = (obj1, obj2) => {
  const uniqueKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const astDiff = uniqueKeys.map((key) => {
    if (!_.has(obj2, key)) {
      return { name: key, state: 'deleted', value: obj1[key] };
    }
    if (!_.has(obj1, key)) {
      return { name: key, state: 'added', value: obj2[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { name: key, state: 'nested', children: getAstDiff(obj1[key], obj2[key]) };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        name: key, state: 'changed', obj1Value: obj1[key], obj2Value: obj2[key],
      };
    }
    return { name: key, state: 'unchanged', value: obj2[key] };
  });
  return astDiff;
};

export default getAstDiff;
