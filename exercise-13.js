function targetTerdekat(arr) {

  var tampungx= -1
  var tampungo= -1
  var hasil= 0 

  for (var i = 0; i < arr.length; i++) {  //0 1 2 3 4 5

      if (arr[i] == 'o') {      // x x i=2 x x x
        tampungo = i
      } else if (arr[i] == 'x') { // x x x  x x i=5
        tampungx = i
      }

      if (tampungx !== -1 && tampungo !==-1) {
          hasil = tampungx - tampungo
          return Math.abs(hasil)   
      } else {
        var hasil = 0
      }
      
    }
    
    return hasil

}

  
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2