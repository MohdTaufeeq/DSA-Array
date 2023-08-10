/*
Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
Output: 9 10 11 3 7 8
Explanation: Array is rotated to right by 3 position.
*/

function rotateArray(arr, d, n) {
  let temp = [1, 2, 3];

  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  for (i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
let d = 2; //number of times rotating the array
rotateLeft2(arr, d, n);
