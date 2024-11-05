function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] != "number") {
      throw new Error("Semua nilai harus bertipe number");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${grade} mendapatkan predicate ${predicate}`);
  }
}

try {
  const studentGrades = ["sembilan puluh lima", 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (err) {
  console.log(err);
}
