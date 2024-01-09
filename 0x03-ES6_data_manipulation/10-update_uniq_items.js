export default function updateUniqueItems(map) {
  // Check if the input is a Map
  if (!(map instanceof Map)) {
    // If not, throw an error
    throw new Error('Cannot process');
  }

  // Iterate over each key-value pair in the Map
  map.forEach((value, key) => {
    // Check if the value is equal to 1
    if (value === 1) {
      // If true, update the value to 100
      map.set(key, 100);
    }
  });
}
