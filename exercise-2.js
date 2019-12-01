function balikstring(array){
    var tampung=""
    for(i=array.length-1;i>=0;i--){
        tampung +=array[i]
    }
    return tampung
}


console.log(balikstring("hello world!"))