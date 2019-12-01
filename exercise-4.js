function dataHandling2() {

    array.splice(1, 2, 'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
    array.splice(4, 2, 'Pria', 'SMA International Metro')
    console.log(array)

    var month = array[3].split('/')
    bulan = month[1]
    switch (bulan) {
        case '01':
            bulan = "Januari"
            break;
        case '02':
            bulan = "Februari"
            break;
        case '03':
            bulan = "Maret"
            break;
        case '04':
            bulan = "April"
            break;
        case '05':
            bulan = "Mei"
            break;
        case '06':
            bulan = "Juni"
            break;
        case '07':
            bulan = "Juli"
            break;
        case '08':
            bulan = "Agustus"
            break;
        case '09':
            bulan = "September"
            break;
        case '10':
            bulan = "Oktober"
            break;
        case '11':
            bulan = "November"
            break;
        case '12':
            bulan = "Desember"
            break;
        default:
            break;
    }
    console.log(bulan)

   
    console.log(month.sort(function(a, b){return b-a}))
    console.log(month.join('-'))
   

    console.log(array[1].slice(0,15))
    return array
}



var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(array)