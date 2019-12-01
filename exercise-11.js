function tentukanDeretAritmatika(arr) {
    var perbedaan= arr[1]-arr[0] // 1

    for (let i = 0; i < arr.length-1; i++) { // 0 1 2 3 4 
        var check= arr[i+1]-arr[i] // 1 1 1 1 1
        if(check !== perbedaan){ 
            return false
        }  
    
    } // ++i ++i ++i ++i ++i
    return true  // 
}
    

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false