Bai 1:
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  return arr.filter(x=> x >=5);
}
    





bai 2:
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
 return  arr.filter(x=> x%2==0)
  
}





bai 3:
/**
 * Give a list of students, filter out non-female 
 */
 
 var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
  return members.filter(x=> x.gender!='female');
}
