
/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
  c ='';
  for ( var i=0; i<n; i++){
  arr.pop();
}
return arr;
}















/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
  return arr.splice(0, n);
}

// console.log(first([1, 2, 3], 2)); // expect [1, 2]











