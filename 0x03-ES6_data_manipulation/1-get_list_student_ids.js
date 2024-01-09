export default function getListStudentIds(students) {
  // Check if students is an instance of Array
  if (students instanceof Array) {
    // If true, use map to extract the "id" property from each object
    return students.map((student) => student.id);
  }
  // If students is not an array, return an empty array
  return [];
}
