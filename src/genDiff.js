import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const result = keys
    .map((key) => {
      if (!_.has(data1, key)) {
        return [`  + ${key}: ${data2[key]}`];
      } if (!_.has(data2, key)) {
        return [`  - ${key}: ${data1[key]}`];
      } if (data1[key] !== data2[key]) {
        return [`  - ${key}: ${data1[key]}  \n  + ${key}: ${data2[key]}`];
      } return [`    ${key}: ${data2[key]}`];
    }, []);
  return console.log(['{', ...result, '}'].join('\n'));
};

export default (filepath1, filepath2) => {
  const file1 = readFileSync('__fixtures__/file1.json', 'utf-8');
  const file2 = readFileSync('__fixtures__/file2.json', 'utf-8');
  const obj1 = JSON.parse(file1);
  const obj2 = JSON.parse(file2);
  genDiff(obj1, obj2);
};
