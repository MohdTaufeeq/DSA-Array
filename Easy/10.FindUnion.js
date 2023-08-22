/*
Example 1:
Input:
n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:
 {1,2,3,4,5}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5} 

Example 2:
Input:
n = 10,m = 7.
arr1[] = {1,2,3,4,5,6,7,8,9,10}
arr2[] = {2,3,4,4,5,11,12}
Output: {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1,6,7,8,9,10
Distnict Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 
*/

function unionArray(arr1, arr2) {
  let UnionArr = [...arr1, ...arr2].sort((a, b) => a - b);
  let result = removeDuplicates(UnionArr);
  return result;
}
console.log(unionArray([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
console.log(
  unionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
);

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; ) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
}
