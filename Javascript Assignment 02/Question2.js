let Maths = Number(prompt("Enter marks for Maths "));
let Physics = Number(prompt("Enter marks for Physics"));
let Chemistry = Number(prompt("Enter marks for Chemistry"));

var totalMarks = Maths + Physics + Chemistry;
let averageMarks = totalMarks / 3;
let grade =null;
if (averageMarks >= 90) {
    grade = "A+";
} else if (averageMarks >= 80) {
    grade = "A";
} else if (averageMarks >= 70) {
    grade = "B";
} else if (averageMarks >= 60) {
    grade = "C";
} else if (averageMarks >= 50) {
    grade = "D";
} else {
    grade = "F";
}
console.log("-----> Marksheet <-----");
console.log("Maths: " + Maths);
console.log("Physics: " + Physics);
console.log("Chemistry: " + Chemistry);
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);
console.log("Grade: " + grade);
