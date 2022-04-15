import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import diff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const diffResult = readFileSync(getFixturePath('diff_result'), 'utf-8');

test('genDiff for JSON', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  expect(diff(filepath1, filepath2)).toEqual(diffResult);
});
test('genDiff for YAML', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');
  expect(diff(filepath1, filepath2)).toEqual(diffResult);
});
