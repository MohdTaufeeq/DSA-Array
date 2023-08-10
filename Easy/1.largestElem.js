function largestElem(arr){
   let maxValue = arr[0];
   for(let i=0; i<arr.length; i++ )
   if(maxValue < arr[i]){
   maxValue = arr[i];
   }
   return maxValue;
}
console.log(largestElem([4,2,-1,5,6,0]));