export default function createInt8TypedArray(length, position, value) {
  // Check if the specified position is outside the range
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // Create a DataView with an ArrayBuffer of the specified length
  const buf = new DataView(new ArrayBuffer(length), 0, length);

  // Set the Int8 value at the specified position
  buf.setInt8(position, value);

  // Return the DataView
  return buf;
}
