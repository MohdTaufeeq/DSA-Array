/*
Example 1:
Input: arr[]= 1 2 3 4 5, num = 3
Output: 2
Explanation: 3 is present in the 2nd index

Example 2:
Input: arr[]= 5 4 3 2 1, num = 5
Output: 0
Explanation: 5 is present in the 0th index
*/

function linearSearch(arr, n) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return (index = i);
    } else index = -1;
  }
  return index;
}
console.log(linearSearch([1, 2, -1, 4, 5], -1));
