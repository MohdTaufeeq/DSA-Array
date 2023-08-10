function checkSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkSort([-5, -4, -3]));
