/*
Example:
Input Format: N = 3, k = 1, array[] = {-1, 1, 1}
Result: 3
Explanation: The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.
*/

function LongestSubArrayNegative(arr, k) {
  let length = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum == k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }

  return length;
}

console.log(LongestSubArrayNegative([-1, 1, 1], 0));
