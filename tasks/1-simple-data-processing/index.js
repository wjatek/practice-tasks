const { deepFreeze } = require("../../utils/deepFreeze");

const students = deepFreeze([
  { name: "Alice", age: 20, grades: [85, 90, 78] },
  { name: "Bob", age: 22, grades: [60, 70, 58] },
  { name: "Charlie", age: 21, grades: [88, 92, 95] },
  { name: "David", age: 19, grades: [72, 75, 70] },
  { name: "Eve", age: 23, grades: [95, 88, 92] },
  { name: "Paul", age: 19, grades: [66, 68, 64] },
  { name: "Frank", age: 20, grades: [50, 55, 45] },
  { name: "Grace", age: 21, grades: [99, 98, 100] },
  { name: "Hank", age: 22, grades: [82, 79, 85] },
  { name: "Ivy", age: 23, grades: [91, 94, 89] },
  { name: "Jack", age: 19, grades: [76, 81, 79] },
  { name: "Karen", age: 20, grades: [69, 65, 70] },
  { name: "Leo", age: 22, grades: [55, 60, 50] },
  { name: "Mia", age: 21, grades: [89, 90, 91] },
  { name: "Nick", age: 20, grades: [73, 77, 75] },
  { name: "Olivia", age: 23, grades: [96, 97, 95] },
  { name: "Quinn", age: 22, grades: [87, 85, 90] },
  { name: "Ryan", age: 21, grades: [78, 82, 80] },
  { name: "Sophia", age: 20, grades: [92, 95, 94] },
  { name: "Tom", age: 23, grades: [59, 62, 61] },
]);

const processStudents = (students) => {
  // your code goes here

  return { youngestStudents, studentsWithAverages, topStudents, totalAverage };
};

module.exports = { students, processStudents };
