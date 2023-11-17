function arkadasSayiMi(sayi1, sayi2) {
    let bolen = 1
    let carpanlarSayi1 = 0
    let carpanlarSayi2 = 0
    let buyukSayi = sayi1
    if (sayi1 < sayi2){
        buyukSayi = sayi2
    }
    while ((buyukSayi != bolen)){
        if (((sayi1%bolen)==0) && (sayi1!=bolen)) {
            carpanlarSayi1 += bolen
        }
        if (((sayi2%bolen)==0) && (sayi2!=bolen)) {
            carpanlarSayi2 += bolen
        }
        bolen++                     
    }
    console.log("carpanlar toplamı " + sayi1 + ": " + carpanlarSayi1)
    console.log("carpanlar toplamı " + sayi2 + ": " + carpanlarSayi2)
    if ((carpanlarSayi1 == sayi2) && (carpanlarSayi2 == sayi1)) {
        console.log("arkadaş sayıdır")
    }else{
        console.log("arkadaş sayı değildir")
    }
}

arkadasSayiMi(220,284)