// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  return arr.map((x)=>{ 
     if(x%2==0)
        return Math.pow(x,2);
    else return x;
  });
}




/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  var kq= arr.reduce((a,b)=>{ 
     return a+b; 
  });
  return Math.round(kq/arr.length);
}




/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  return arr.map((x)=>
    Math.abs(x)
  );
}




/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  // your code here
  if(a>b&&a>c)
        return b*b+c*c==a*a;
    else
    if(b>a&&b>c)
        return b*b==a*a+c*c;
    else if(c>a&&c>b)
        return c*c==a*a+b*b;
    return false;
}




/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
  // your code here!
  return 2 * r * 3.14;
}
function acreageOfCircle(r) {
  //your code here!
  return Math.pow(r, 2) * 3.14;
}






/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  let result = [Math.sin(number), Math.cos(number), Math.tan(number)];
  return result.map((el) => el.toFixed(3));
}