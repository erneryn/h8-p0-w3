function cariMean(arr) {
  var tamp = 0
for (let i = 0; i < arr.length; i++) {
    tamp += arr[i]
}

var mean= Math.round(tamp/arr.length)
  return mean


  
}
  
  
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7