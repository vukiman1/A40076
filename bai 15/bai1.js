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