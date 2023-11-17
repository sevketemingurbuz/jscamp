function asalMi(...sayilar) {
    for (let i = 0; i < sayilar.length; i++) {
        const sayi = sayilar[i];
        let bolen = 2
    while (sayi != bolen){
        if (sayi<2) {
            console.log(sayi + ": asal değil")
            break;
        }
        if ((sayi%bolen)==0){
            console.log(sayi + ": asal değil")
            break;
        }
        bolen++
    }    
    if(sayi == bolen)
    console.log(sayi + ": asal")
    }  
}

asalMi(17,22,37,44,-5,2)

console.log("asal sayılar:")
function asal(sayi){
    let bolen = 2
    while(sayi != bolen){
        if ((sayi%bolen)==0){
            break
        }
        bolen++
    }
    if(sayi == bolen){
            console.log(sayi)
    }
}

function asalIndex() {
    for (let i = 2; i < 1000; i++) {
        asal(i)     
    }
}

asalIndex()
