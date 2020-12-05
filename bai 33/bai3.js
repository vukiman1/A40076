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