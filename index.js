import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { evaluateScore } from './src/gradeCalculator.js';

export const runGradeCalculator = async () => {
  const rl = createInterface({ input, output });

  const rawInput = await rl.question('Enter student score (0-100): ');
  rl.close();

  const result = evaluateScore(rawInput);
  const banner = result.isValid ? '=== Grade Evaluation ===' : '=== Validation Error ===';

  console.log(`\n${banner}\n${result.message}\n`);
  return result;
};

runGradeCalculator();
