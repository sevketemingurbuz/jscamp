function mukemmelMi(sayi){
    let bolen = 1; let carpanlarToplami = 0
    while(sayi >= bolen){
        if ((sayi%bolen)==0) {
            carpanlarToplami += bolen
        }
        bolen++
    }
    if (carpanlarToplami == sayi*2){
        console.log(sayi)
    }
}

function index() {
    for (let i = 1; i <= 10000; i++) {
        mukemmelMi(i)
    }
}

index()