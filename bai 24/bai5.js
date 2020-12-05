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