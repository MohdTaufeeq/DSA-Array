/*
Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2
	Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

Example 2:
Input: [1]
Output: Second Smallest : -1
	Second Largest : -1
Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.
*/

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] !== large) {
      second_large = arr[i];
    }
  }
  return second_large;
}
console.log(secondLargest([1, 2, 4, 7, 7, 5, 6]));

function secondSmallest(arr) {
  if (arr.length < 2) return -1;

  let small = Infinity;
  let second_small = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_small = small;
      small = arr[i];
    } else if (arr[i] < second_small && arr[i] !== small) {
      second_small = arr[i];
    }
  }
  return second_small;
}
console.log(secondSmallest([1, 2, 4, 7, 7, 5, 6]));
