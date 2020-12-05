// Sort an array from shortest string to longest

function lengthSort(arr) {
  return arr.sort((a,b)=> -b.length + a.length);
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length