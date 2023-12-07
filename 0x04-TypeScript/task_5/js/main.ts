export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

/**
 * Sum two subjects
 * @function.
 * @param {MajorCredits} subject1 - The first subject.
 * @param {MajorCredits} subject2 - The second subject
 * @returns {MajorCredits} Sum of the subjects
 *
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

/**
 * Sum two subjects
 * @function.
 * @param {MinorCredits} subject1 - The first subject.
 * @param {MinorCredits} subject2 - The second subject
 * @returns {MinorCredits} Sum of the subjects
 *
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
