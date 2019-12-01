function pasanganTerbesar(num) {
    var arr= num.toString().split("")
 
    var result=[]
    for (let i = 0; i < arr.length-1; i++) {
    
        result.push(Number(arr[i]+arr[i+1]))
        }

  
    result.sort(function(a, b) {
        return b - a;
      });
    return result[0];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

