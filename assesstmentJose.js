//CALCULADORA;
let n1 = prompt("introduce un número");
let operacion = prompt("introduce la operación  +, -, *, /, ^");
let n2 = prompt("introduce otro número");

let resultado = 0;
if (operacion == "+") {
  resultado = parseFloat(n1) + parseFloat(n2);
} else if (operacion === "-") {
  resultado = n1 - n2;
} else if (operacion === "/") {
  resultado = n1 / n2;
} else if (operacion === "*") {
  resultado = n1 * n2;
} else if (operacion === "^") {
  resultado = Math.pow(n1, n2);
}

console.log(resultado);

//TIRAR DADO

function llegarAlNum(numero) {
  let totalScore = 0;
  let value = 0;
  while (totalScore < numero) {
    value = 0 + parseInt(Math.floor(6 * Math.random() + 1));
    totalScore = totalScore + value;
    console.log("sacaste un", value, "y llevas un total de ", totalScore);
  }
  if (totalScore >= numero) {
    console.log("Se acabó");
  }
}

llegarAlNum(50);

//LISTA DE ALUMNOS Y PROFESORES ////(AQUÍ NO SUPE COMO MEZCLAR LOS ARRAYS Y HACER LAS LISTAS, SOLO MUESTRO LAS CLASES POR LA CONSOLA) :(

const name = ["Pedro", "Rico", "Rosa"];
const age = ["18", "26", "35"];
const gender = ["hombre", "hombre", "mujer"];
const subject = ["mates", "historia", "etica"];
const group = ["A", "B", "C"];

const teacherName = ["Ana", "Manuela", "Pepin"];
const teacherSubject = ["mates", "historia", "etica"];
const teacherGroup = ["A", "B", "C"];

class Person {
  name;
  age;
  gender;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person {
  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static registrar(
    names,
    ageStudents,
    genderStudents,
    subjectStudents,
    groupStudents
  ) {
    return names.map((name, index) => {
      return new Student(
        name,
        ageStudents[index],
        genderStudents[index],
        subjectStudents[index],
        groupStudents[index]
      );
    });
  }
}

class Teacher extends Person {
  StudentList = [];
  constructor(name, subject, group) {
    super(name);
    this.subject = subject;
    this.group = group;
  }
  static crearListaProfes(names, teacherSubject, teacherGroup) {
    return names.map((name, index) => {
      return new Teacher(name, teacherSubject[index], teacherGroup[index]);
    });
  }
}
let students = Student.registrar(name, age, gender, subject, group);
let teacher = Teacher.crearListaProfes(
  teacherName,
  teacherSubject,
  teacherGroup
);
console.log(students);
console.log(teacher);
