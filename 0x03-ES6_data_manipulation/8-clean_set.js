export default function cleanSet(set, startString) {
  // Check for invalid or missing parameters
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Initialize an array to store modified string parts
  const parts = [];

  // Iterate through the values of the set
  for (const value of set.values()) {
    // Check if the value is a string and starts with the specified prefix
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the substring after the prefix
      const valueSubStr = value.substring(startString.length);

      // Check if the substring is not empty and different from the original value
      if (valueSubStr && valueSubStr !== value) {
        // Add the modified substring to the array
        parts.push(valueSubStr);
      }
    }
  }

  // Join the modified parts into a hyphen-separated string
  return parts.join('-');
}
