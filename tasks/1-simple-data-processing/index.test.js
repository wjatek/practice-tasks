const { students, processStudents } = require("./index");

describe("simple-data-processing", () => {
  let result;

  beforeAll(() => {
    result = processStudents(students);
  });

  test("should return youngest students (under 20), sorted alphabetically", () => {
    expect(result.youngestStudents).toEqual([
      { name: "David", age: 19, grades: [72, 75, 70] },
      { name: "Jack", age: 19, grades: [76, 81, 79] },
      { name: "Paul", age: 19, grades: [66, 68, 64] },
    ]);
  });

  test("should return students with average grades sorted in descending order", () => {
    expect(result.studentsWithAverages).toEqual([
      { name: "Grace", age: 21, grades: [99, 98, 100], avg: 99 },
      { name: "Olivia", age: 23, grades: [96, 97, 95], avg: 96 },
      { name: "Sophia", age: 20, grades: [92, 95, 94], avg: 93.67 },
      { name: "Charlie", age: 21, grades: [88, 92, 95], avg: 91.67 },
      { name: "Eve", age: 23, grades: [95, 88, 92], avg: 91.67 },
      { name: "Ivy", age: 23, grades: [91, 94, 89], avg: 91.33 },
      { name: "Mia", age: 21, grades: [89, 90, 91], avg: 90 },
      { name: "Quinn", age: 22, grades: [87, 85, 90], avg: 87.33 },
      { name: "Alice", age: 20, grades: [85, 90, 78], avg: 84.33 },
      { name: "Hank", age: 22, grades: [82, 79, 85], avg: 82 },
      { name: "Ryan", age: 21, grades: [78, 82, 80], avg: 80 },
      { name: "Jack", age: 19, grades: [76, 81, 79], avg: 78.67 },
      { name: "Nick", age: 20, grades: [73, 77, 75], avg: 75 },
      { name: "David", age: 19, grades: [72, 75, 70], avg: 72.33 },
      { name: "Karen", age: 20, grades: [69, 65, 70], avg: 68 },
      { name: "Paul", age: 19, grades: [66, 68, 64], avg: 66 },
      { name: "Bob", age: 22, grades: [60, 70, 58], avg: 62.67 },
      { name: "Tom", age: 23, grades: [59, 62, 61], avg: 60.67 },
      { name: "Leo", age: 22, grades: [55, 60, 50], avg: 55 },
      { name: "Frank", age: 20, grades: [50, 55, 45], avg: 50 },
    ]);
  });

  test("should return top students with average grade over 80", () => {
    expect(result.topStudents).toEqual([
      { name: "Hank", age: 22, grades: [82, 79, 85], avg: 82 },
      { name: "Alice", age: 20, grades: [85, 90, 78], avg: 84.33 },
      { name: "Quinn", age: 22, grades: [87, 85, 90], avg: 87.33 },
      { name: "Mia", age: 21, grades: [89, 90, 91], avg: 90 },
      { name: "Ivy", age: 23, grades: [91, 94, 89], avg: 91.33 },
      { name: "Charlie", age: 21, grades: [88, 92, 95], avg: 91.67 },
      { name: "Eve", age: 23, grades: [95, 88, 92], avg: 91.67 },
      { name: "Sophia", age: 20, grades: [92, 95, 94], avg: 93.67 },
      { name: "Olivia", age: 23, grades: [96, 97, 95], avg: 96 },
      { name: "Grace", age: 21, grades: [99, 98, 100], avg: 99 },
    ]);
  });

  test("should return total average grade calculated from all grades", () => {
    expect(result.totalAverage).toBeCloseTo(78.77, 2);
  });
});
