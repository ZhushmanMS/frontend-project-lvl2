import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './genDiff.js';
import format from './formatters/index.js';

export default (filepath1, filepath2, formatName = 'stylish') => {
  const pathFirstFile = path.resolve(process.cwd(), filepath1);
  console.log(pathFirstFile);
  const pathSecondFile = path.resolve(process.cwd(), filepath2);
  const dataFirstFile = readFileSync(pathFirstFile, 'utf-8');
  const dataSecondFile = readFileSync(pathSecondFile, 'utf-8');
  const extnameFirstFile = path.extname(pathFirstFile).slice(1);
  console.log(`\n${extnameFirstFile}`);
  const extnameSecondFile = path.extname(pathSecondFile).slice(1);
  const parsingDataFirstFile = parse(dataFirstFile, extnameFirstFile);
  const parsingDataSecondFile = parse(dataSecondFile, extnameSecondFile);
  const astDiff = genDiff(parsingDataFirstFile, parsingDataSecondFile);
  return format(astDiff, formatName);
};
