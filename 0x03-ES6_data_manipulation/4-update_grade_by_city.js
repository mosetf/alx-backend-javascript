export default function updateStudentGradeByCity(students, city, newGrades) {
  // Define a default grade object
  const defaultGrade = { grade: 'N/A' };

  // Check if students is an instance of Array
  if (students instanceof Array) {
    // Use filter to get students in the specified city
    // Use map to create a new array with updated grades
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        // Use filter and pop to get the latest grade for the student
        // If no grade is found, use the default grade
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  // If students is not an array, return an empty array
  return [];
}
