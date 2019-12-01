
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function datahandling(array){
    var tampung=""
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
        switch (j) {
            case 0:
                tampung += "No ID : "+array[i][j]+"\n"
                break;
            case 1:
                tampung += "Nama Lengkap : "+array[i][j]+"\n"
                break;
            case 2:
                tampung += "TTL : "+array[i][j]
                break;
            case 3: 
                tampung += " "+array[i][j]+"\n"
                break;
            case 4:
                tampung += "Hobi : "+array[i][j]+"\n"
        }    
            
        }
        tampung += "\n"
    }
    return tampung
}

console.log(datahandling(input))