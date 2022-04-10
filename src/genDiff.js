import _ from 'lodash';

const ast = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));  
  const result = keys.map((key)=> {
    if (!_.has(obj2, key)) {
      return {key, state: 'deleted', value: obj1[key]};
    }
    if (!_.has(obj1, key)) {
      return {key, state: 'added', value: obj2[key]}
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {key, state: 'inner node', children: ast(obj1[key], obj2[key]) };
    }
    if (obj1[key] !== obj2[key]) {
      return {key, state: 'changed', obj1Value: obj1[key], obj2Value: obj2[key]}
    }
    return {key, state: 'unchanged', value: obj2[key]}
    });

  return result;
};

export default ast;
