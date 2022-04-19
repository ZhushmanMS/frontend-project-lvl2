import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import diff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const stylishDiffResult = readFileSync(getFixturePath('stylish_diff_result'), 'utf-8');
const plainDiffResult = readFileSync(getFixturePath('plain_diff_result'), 'utf-8');

test('stylishDiff for JSON', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  expect(diff(filepath1, filepath2)).toEqual(stylishDiffResult);
});
test('stylishDiff for YAML', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');
  expect(diff(filepath1, filepath2)).toEqual(stylishDiffResult);
});

test('plainDiff for JSON', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  expect(diff(filepath1, filepath2, 'plain')).toEqual(plainDiffResult);
});

test('plainDiff for YAML', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');
  expect(diff(filepath1, filepath2, 'plain')).toEqual(plainDiffResult);
});
