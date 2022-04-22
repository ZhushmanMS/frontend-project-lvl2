import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

let expectedResult;

const extAndFormat = [
  ['json', 'stylish'], ['json', 'plain'], ['json', 'json'],
  ['yaml', 'stylish'], ['yaml', 'plain'], ['yaml', 'json'],
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const getFixtureData = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test.each(extAndFormat)(
  'genDiff .%s files in %s format',
  (ext, format) => {
    expectedResult = genDiff(getFixturePath(`file1.${ext}`), getFixturePath(`file2.${ext}`), format);
    expect(expectedResult).toEqual(getFixtureData(`${format}_diff_result`));
  },
);
