export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

/**
 * Creates an employee based on the provided salary
 * @function.
 * @param {number | string} salary - The salary of the employee.
 * @returns {Director | Teacher} Returns an instance of Director or Teacher
 *
 */
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/**
 *
 * @function.
 * @param {Director | Teacher} employee - The employee.
 * @returns {Director } Returns an instance of Director
 *
 */
export function isDirector(employee: Director | Teacher) {
  return employee instanceof Director;
}

/**
 * Returns work tasks based on employee
 * @function.
 * @param {Director | Teacher} employee - The salary of the employee.
 * @returns {string} Returns an string
 *
 */
export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

/**
 * Returns the class of the day
 * @function.
 * @param {Subjects} todayClass - The class of the day.
 * @returns {string} Returns a string
 *
 */
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
