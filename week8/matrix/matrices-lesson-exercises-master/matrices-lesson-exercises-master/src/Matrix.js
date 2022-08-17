/* Write your code below */
class Matrix {
  constructor(rows, cols) {
    this.matrix = [];
    this.generateMatrix(rows, cols);
  }
  generateMatrix(rows, cols) {
    let count = 1;
    for (let i = 0; i < rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        this.matrix[i][j] = count;
        count++;
      }
    }
  }
  print() {
    for (let i = 0; i < this.matrix.length; i++) {
      let row = "";
      for (let j = 0; j < this.matrix[i].length; j++) {
        row += this.matrix[i][j] + "\t";
      }
      console.log(row);
    }
  }
  printColum(colNum) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i][colNum]);
    }
  }
  printRow(rowNum) {
    for (let i = 0; i < this.matrix[rowNum].length; i++) {
      console.log(this.matrix[rowNum][i]);
    }
  }
  findCoordinate(value) {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] == value) {
          return { x: j, y: i };
        }
      }
    }
    return null;
  }
}
class EmployeeMatrix extends Matrix {
  constructor(cols, rows) {
    super(cols, rows);
    this.Richest = { name: "", salary: 0 };
  }

  loadData(salaryData) {
    for (let i = 0; i < salaryData.length; i++) {
      if (salaryData[i]["salary"] > this.Richest["salary"]) {
        this.Richest["name"] = salaryData[i]["name"];
        this.Richest["salary"] = salaryData[i]["salary"];
      }
    }
    let ROWS = 0;
    let COLS = 0;
    let matrix = [];
    salaryData.forEach((row) => {
      COLS = 0;
      matrix[ROWS] = [];
      for (let data in row) {
        matrix[ROWS][COLS] = row[data];
        COLS++;
      }
      ROWS++;
    });
    super.matrix = matrix;
  }
  getEmployees(department) {
    let names = "";
    let salary = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][2] == department) {
        names += this.matrix[i][1] + " ";
        salary += this.matrix[i][3];
      }
    }
    return names + " Total salary " + salary;
  }
  findRichest() {
    return this.Richest.name;
  }
}

//You can paste the code from the lesson below to test your solution
let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];
let m = new EmployeeMatrix();

m.loadData(data);
m.print();
console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.findRichest());

/* Do not remove the exports below */
module.exports = Matrix;
