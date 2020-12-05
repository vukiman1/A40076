/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
var _try = true;
function getObjectKey(obj, keys) {
    if ( _try){
        var temp =[];
        keys = temp;
        _try = false;
    }
    for(var x in obj){
        keys.push(x);
        if(typeof obj[x] == 'object'){
            getObjectKey(obj[x], keys);
        }
    }
    return keys;
}
  
