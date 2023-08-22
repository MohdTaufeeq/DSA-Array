/*
Longest Subarray with given Sum K(Positives)
Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
*/

function LongestSubArray(arr, N, K) {
  let maxArrLength = 0;
  for (let i = 0; i < N; i++) {
    let sum = 0;

    for (let j = i; j < N; j++) {
      sum += arr[j];

      if (sum == K) {
        maxArrLength = Math.max(maxArrLength, j - i + 1);
      }
    }
  }
  return maxArrLength;
}
console.log(LongestSubArray([2, 3, 5, 1, 9], 5, 10));
