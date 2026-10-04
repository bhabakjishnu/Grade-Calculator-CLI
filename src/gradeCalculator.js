export const validateScore = (score) =>
  Number.isFinite(score) ? (score >= 0 && score <= 100 ? true : false) : false;

export const getGradeDetails = (score) =>
  score >= 90
    ? { grade: 'A', feedback: 'Outstanding performance!' }
    : score >= 80
    ? { grade: 'B', feedback: 'Great job!' }
    : score >= 70
    ? { grade: 'C', feedback: 'Good effort, room for improvement.' }
    : score >= 60
    ? { grade: 'D', feedback: 'Needs improvement to meet passing standards.' }
    : { grade: 'F', feedback: 'Failing grade. Significant improvement required.' };

export const evaluateScore = (rawInput) => {
  const trimmed = typeof rawInput === 'string' ? rawInput.trim() : `${rawInput ?? ''}`;
  const isInputEmpty = trimmed === '' || rawInput === null || rawInput === undefined ? true : false;
  const parsed = isInputEmpty ? NaN : Number(trimmed);
  const isValid = validateScore(parsed);
  const details = isValid ? getGradeDetails(parsed) : null;

  return isValid
    ? {
        isValid: true,
        score: parsed,
        grade: details.grade,
        feedback: details.feedback,
        message: `Score: ${parsed} | Grade: ${details.grade} - ${details.feedback}`,
      }
    : {
        isValid: false,
        score: NaN,
        grade: 'N/A',
        feedback: 'Invalid score entered.',
        message: `Error: "${rawInput}" is not a valid score. Please enter a number between 0 and 100.`,
      };
};
