function angkaPalindrome(num) {
    var angka = num+1; // 
    var checknum = false; 
    
    while (checknum === false) {
        
        var reverse ="" 
        var stringnum = String(angka)
        for (let i = stringnum.length-1; i >=0 ; i--){
        reverse += stringnum[i]
    }
  

             if (stringnum === reverse) {
                checknum = true
                return angka
             } else {
                 angka ++
             }  
    }

}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001