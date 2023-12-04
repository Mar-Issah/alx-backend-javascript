/**
 * Returns ids from a list of students.
 * @function
 * @param {{id: Number, firstName: String, location: String}[]}
 * @returns {[id: Number]}
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
