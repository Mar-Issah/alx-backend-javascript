/**
 * Retrieves students based on given city.
 * @function
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - List of students.
 * @param {String} city - The city.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
