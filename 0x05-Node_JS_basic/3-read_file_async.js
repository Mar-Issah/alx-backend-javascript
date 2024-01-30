const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path - The path to the CSV data file.
 * @returns {Promise<void>}
 */

const countStudents = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentObj = {};
        const fieldNames = fileLines[0].split(',');
        const studentPropNames = fieldNames.slice(0, fieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRow = line.split(',');
          const studentPropValues = studentRow.slice(0, studentRow.length - 1);
          const field = studentRow[studentRow.length - 1];
          if (!Object.keys(studentObj).includes(field)) {
            studentObj[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
          studentObj[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentObj).reduce((pre, cur) => (pre || []).length + cur.length);
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentObj)) {
          const studentNames = group.map((student) => student.firstname).join(', ');
          console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        }
        resolve(true);
      }
    });
  });

module.exports = countStudents;
