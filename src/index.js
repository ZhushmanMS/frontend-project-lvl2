import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './genDiff.js';
import format from './formatters/stylish.js';

export default (filepath1, filepath2) => {
  const pathFirstFile = path.resolve(process.cwd(), filepath1);
  const pathSecondFile = path.resolve(process.cwd(), filepath2);
  const dataFirstFile = readFileSync(pathFirstFile, 'utf-8');
  const dataSecondFile = readFileSync(pathSecondFile, 'utf-8');
  const extnameFirstFile = path.extname(pathFirstFile).substring(1);
  const extnameSecondFile = path.extname(pathSecondFile).substring(1);
  const parsingDataFirstFile = parse(dataFirstFile, extnameFirstFile);
  const parsingDataSecondFile = parse(dataSecondFile, extnameSecondFile);
  const astDiff = genDiff(parsingDataFirstFile, parsingDataSecondFile);
  return format(astDiff);
};
