/*
Example 1:
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

Example 2:
Input: 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
*/

function moveZeroes(n, a) {
  j = -1;
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) {
      j = i;
      break;
    }
  }

  if (j == -1) return a;

  for (let i = j + 1; i < n; i++) {
    if (a[i] !== 0) {
      [a[i], a[j]] = [a[j], a[i]];
      j++;
    }
  }
  return a;
}

console.log(moveZeroes(10, [1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
