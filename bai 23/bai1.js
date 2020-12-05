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