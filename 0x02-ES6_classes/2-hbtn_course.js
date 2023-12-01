/**
 * Represents a class HolbertonCourse.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse instance.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - Duration of the course.
   * @param {String[]} students - The names of students.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the duration of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the duration of the course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (value.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
