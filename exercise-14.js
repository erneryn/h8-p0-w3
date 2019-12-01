function mengelompokkanAngka(arr) {
    var angkagenap=[];
    var angkaganjil=[];
    var  keltiga=[];
    var tampung=[angkagenap,angkaganjil,keltiga]

   for (let i = 0; i < arr.length; i++) {
       var check = arr[i];
       
        if (arr[i] % 2 == 0 && arr[i] % 3 !== 0) { // angka genap dan bukan kelipatan 3
            angkagenap.push(check)
        } else if (arr[i] % 3 === 0){ // kelipatan tiga
            keltiga.push(check)
        } else if (arr[i] !== 0) { // selain angka genap dan tiga adalah ganjil
            angkaganjil.push(check)
        }

   }

   return tampung;



}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]