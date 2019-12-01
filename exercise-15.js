
function groupAnimals(animals) {
   var abjad='abcdefghijklmnopqrstuvwxyz'
   var result=[]
  
   
   for (let i = 0; i <  abjad.length; i++) {
    var temp=[]
      for (let j = 0; j < animals.length; j++) {
          if (animals[j][0] === abjad[i]) {
              temp.push(animals[j])
          } 
        }

       if (temp.length !== 0) {
           result.push(temp)
           
       }
            
        

    }
return result

  }
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

