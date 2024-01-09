export default function getStudentsByLocation(students, city) {
  // Check if students is an instance of Array
  if (students instanceof Array) {
    // If true, use filter to create a new array with students from the specified city
    return students.filter((student) => student.location === city);
  }
  // If students is not an array, return an empty array
  return [];
}
