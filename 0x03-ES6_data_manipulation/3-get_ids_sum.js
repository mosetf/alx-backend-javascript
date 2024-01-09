export default function getStudentIdsSum(students) {
  // Check if students is an instance of Array
  if (students instanceof Array) {
    // Use reduce to calculate the sum of student IDs
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  // If students is not an array, return 0
  return 0;
}
