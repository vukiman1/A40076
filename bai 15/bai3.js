/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
  return arr.splice(0, n);
}

// console.log(first([1, 2, 3], 2)); // expect [1, 2]