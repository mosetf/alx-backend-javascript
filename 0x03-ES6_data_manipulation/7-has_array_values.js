export default function hasValuesFromArray(set, array) {
  // Use the every function to check if every value
  // in the array is present in the Set
  return array.every((value) => set.has(value));
}
