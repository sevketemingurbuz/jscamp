function addToCart(productName) {
    console.log("Sepete eklendi: " + productName)
}
console.log("Sepete eklendi")

let sayHello = () =>{
    console.log("Merhaba Dünya")
}

sayHello()

let product1 = {productName: "Keman", unitPrice: 25, quantity: 1500}

function addToCart3(product) {
    console.log("Ürün adı: " + product.productName + " adedi: " + product.unitPrice + " fiyatı: " + product.quantity)
}

addToCart3(product1)