/**
 * Returns the sum of ids of a list of students.
 * @function
 * @param {{id: Number, firstName: String, location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const reducerFunc = (acc, currValue) => acc.id || acc + currValue.id;
    return students.reduce(reducerFunc, 0);
  }
  return 0;
}
