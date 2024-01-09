export default function groceriesList() {
  // Array of arrays containing items and their respective quantities
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  // Create a Map using the provided values
  return new Map(values);
}
