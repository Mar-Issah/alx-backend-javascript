const fs = require('fs/promises');

/**
 * Counts the students in a CSV data file.
 * @param {String} path - The path to the CSV data file.
 * @returns {Promise<void>}
 */
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    fileLines.slice(1).forEach((line) => {
      const [field, ...studentPropValues] = line.split(',');
      studentGroups[field] = [
        ...(studentGroups[field] || []),
        Object.fromEntries(studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]])),
      ];
    });

    const totalStudents = Object.values(studentGroups).flat().length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }

    return true;
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
};

module.exports = countStudents;
