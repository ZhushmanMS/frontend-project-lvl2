import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './genDiff.js';
import format from './formatters/index.js';

const getDataFormat = (filePath) => path.extname(filePath).slice(1);

const getFormattedData = (filePath) => {
  const fileData = readFileSync(filePath, 'utf-8');
  const dataFormat = getDataFormat(filePath);
  const parsedData = parse(fileData, dataFormat);
  return parsedData;
};

export default (filepath1, filepath2, formatName = 'stylish') => {
  const pathFirstFile = path.resolve(process.cwd(), filepath1);
  const pathSecondFile = path.resolve(process.cwd(), filepath2);
  const dataFirstFile = getFormattedData(pathFirstFile);
  const dataSecondFile = getFormattedData(pathSecondFile);
  const astDiff = genDiff(dataFirstFile, dataSecondFile);
  return format(astDiff, formatName);
};
