import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const dataDiff = ['{', ...keys
    .map((key) => {
      if (!_.has(data1, key)) {
        return [`  + ${key}: ${data2[key]}`];
      } if (!_.has(data2, key)) {
        return [`  - ${key}: ${data1[key]}`];
      } if (data1[key] !== data2[key]) {
        return [`  - ${key}: ${data1[key]}  \n  + ${key}: ${data2[key]}`];
      } return [`    ${key}: ${data2[key]}`];
    }, []), '}'].join('\n');
  console.log(dataDiff);
  return dataDiff;
};

export default (filepath1, filepath2) => {
  const pathToFirstFile = readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8');
  const pathToSecondFile = readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8');
  const dataFromFirstFile = JSON.parse(pathToFirstFile);
  const dataFromSecondFile = JSON.parse(pathToSecondFile);
  genDiff(dataFromFirstFile, dataFromSecondFile);
};
