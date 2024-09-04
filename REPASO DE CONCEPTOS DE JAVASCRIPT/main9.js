function binarySearchRecursive(arr, x, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2)
  console.log(mid)
  if (high >= low) {

   

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      console.log(`Searching in the left half: low=${low}, high=${mid - 1}`);
      return binarySearchRecursive(arr, x, low, mid - 1);
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      console.log(`Searching in the right half: low=${mid + 1}, high=${high}`);
      return binarySearchRecursive(arr, x, mid + 1, high);
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    console.log(`Element ${x} not found in the array`);
    return -1;
  }
}



// Ejemplo de uso:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x = 6;

console.log("Recursive Binary Search:");
binarySearchRecursive(arr, x);

