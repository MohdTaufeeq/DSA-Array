function rotateLeft2(arr, d, n) {
  //Initializing array temp with size n
  var temp = new Array(n);

  let k = 0;

  // Storing the n - d elements of
  // array arr[] to the front of temp[]
  for (let i = d; i < n; i++) {
    temp[k] = arr[i];
    k++;
  }

  // Storing the first d elements of array arr[]
  //  into temp
  for (let i = 0; i < d; i++) {
    temp[k] = arr[i];
    k++;
  }
  //Printing the temp array which stores the result
  for (let i = 0; i < n; i++) {
    console.log(temp[i] + " ");
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
let d = 2; //number of times rotating the array
rotateLeft2(arr, d, n);

