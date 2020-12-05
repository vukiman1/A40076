// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  return arr.map((x)=>{ 
     if(x%2==0)
        return Math.pow(x,2);
    else return x;
  });
}