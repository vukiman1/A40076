/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
  var maxx=0;
  for (var i=0; i<arr.length; i++ ){
      if (arr[i] > maxx){
          maxx = arr[i];
      };
  }
  return maxx;
}





/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
  if(x){
    return true;
  }else{
    return false;
  }
}










/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
   if (score < 5) return 'C';
 else if ( score >= 7 ) return 'A';
 else return 'B';
}