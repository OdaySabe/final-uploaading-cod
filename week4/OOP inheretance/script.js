class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }
  addCourse(course) {
    this.courses.push(course);
  }
}
class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }
  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    } else {
      console.log(`you already added ${course} before`);
    }
  }
}
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.name = "Professor " + name;
    this.salary = salary;
    super.courses = {
      TeacherCourses: [],
      numberOfCourses: 0,
    };
  }
  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }
  addCourse(course) {
    this.courses.TeacherCourses.push(course);
    this.courses.numberOfCourses += 1;
  }
}
class TeacherAssistant extends Teacher {
  constructor(name, startYear, salary) {
    super(name, startYear, salary);
  }
}
const teacherAssistant = new TeacherAssistant("Mohammad", 2020, 3000);
const FirstStudent = new Student("Oday", 2016);
FirstStudent.addCourse("Web programming");
const FirstTeacher = new Teacher("Mohammad", 2016, 4500);
FirstTeacher.giveGrade(FirstStudent, "Web programming", 96);
FirstStudent.addCourse("Math");
FirstStudent.addCourse("Physics");
FirstTeacher.addCourse("Web programming");
FirstTeacher.addCourse("Math");
FirstTeacher.addCourse("Physics");

console.log(FirstStudent.courses);
console.log(FirstTeacher.courses);
console.log(teacherAssistant.name);
