// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  return arr.sort(function(item1, item2){
      if (item1 > item2){
          return 1;
      };
       if (item1 < item2){
          return -1;
      };
       if (item1 = item2){
          return 0;
      };
  })
}





//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
  return arr.sort((a,b) => b-a);
}





// Sort an array from shortest string to longest

function lengthSort(arr) {
  return arr.sort((a,b)=> -b.length + a.length);
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length






// Sort an array alphabetically

function alphabetical(arr) {
  return arr.sort((a,b)=>{ 
      for (var i=0;;i++)
      {
          if(!a.charCodeAt(i).isNaN)
          {
              if(!b.charCodeAt(i).isNaN)
              {
                  if(a.charCodeAt(i)-b.charCodeAt(i)==0)
                    continue;
                  return a.charCodeAt(i)-b.charCodeAt(i);
              }
              else break;
          }
          else break;
      }
  });
}






// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  
  return arr.sort((a,b) => a.age - b.age);
}







/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
  // Write code here...
  var kq=students.sort((a,b)=>{ 
     return b.score-a.score; 
  }).slice(0,3);
  return kq.reduce((a,b)=>{
      return a.concat(b.name);
  },[]);
}




