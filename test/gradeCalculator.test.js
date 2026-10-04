import test from 'node:test';
import assert from 'node:assert/strict';
import { validateScore, getGradeDetails, evaluateScore } from '../src/gradeCalculator.js';

test('validateScore should validate numeric ranges correctly', () => {
  assert.equal(validateScore(100), true);
  assert.equal(validateScore(90), true);
  assert.equal(validateScore(50.5), true);
  assert.equal(validateScore(0), true);
  assert.equal(validateScore(-0.1), false);
  assert.equal(validateScore(100.1), false);
  assert.equal(validateScore(NaN), false);
  assert.equal(validateScore(Infinity), false);
  assert.equal(validateScore('90'), false);
});

test('getGradeDetails should assign correct grades and feedback', () => {
  const cases = [
    { score: 100, expectedGrade: 'A' },
    { score: 90, expectedGrade: 'A' },
    { score: 89.9, expectedGrade: 'B' },
    { score: 80, expectedGrade: 'B' },
    { score: 79.9, expectedGrade: 'C' },
    { score: 70, expectedGrade: 'C' },
    { score: 69.9, expectedGrade: 'D' },
    { score: 60, expectedGrade: 'D' },
    { score: 59.9, expectedGrade: 'F' },
    { score: 0, expectedGrade: 'F' },
  ];

  cases.forEach(({ score, expectedGrade }) => {
    const details = getGradeDetails(score);
    assert.equal(
      details.grade,
      expectedGrade,
      `Expected score ${score} to produce grade ${expectedGrade}, got ${details.grade}`
    );
    assert.equal(typeof details.feedback === 'string' ? true : false, true);
  });
});

test('evaluateScore should handle valid string input and parse correctly', () => {
  const resultA = evaluateScore('95');
  assert.equal(resultA.isValid, true);
  assert.equal(resultA.grade, 'A');
  assert.equal(resultA.score, 95);
  assert.match(resultA.message, /Score: 95 \| Grade: A/);

  const resultB = evaluateScore('  85.5  ');
  assert.equal(resultB.isValid, true);
  assert.equal(resultB.grade, 'B');
  assert.equal(resultB.score, 85.5);

  const resultZero = evaluateScore('0');
  assert.equal(resultZero.isValid, true);
  assert.equal(resultZero.grade, 'F');
  assert.equal(resultZero.score, 0);

  const resultHundred = evaluateScore('100');
  assert.equal(resultHundred.isValid, true);
  assert.equal(resultHundred.grade, 'A');
  assert.equal(resultHundred.score, 100);
});

test('evaluateScore should reject invalid input gracefully', () => {
  const invalidInputs = ['-10', '105', 'abc', '', '   ', null, undefined];

  invalidInputs.forEach((input) => {
    const result = evaluateScore(input);
    assert.equal(
      result.isValid,
      false,
      `Expected input "${input}" to be invalid`
    );
    assert.equal(result.grade, 'N/A');
    assert.match(result.message, /Error:/);
  });
});
