const itemJson =
  `{
    "items": [
        {
            "product": {
                "id": 2321312,
                "name": "iPhone 11 128GB Branco Desbloqueado iOS 4G Wi-Fi Câmera 12MP - Apple",
                "images": [
                    "https://images-submarino.b2w.io/produtos/01/00/img/1611324/8/1611324805_1SZ.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1611324/8/1611324805_2SZ.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1611324/8/1611324805_3SZ.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1611324/8/1611324805_4SZ.jpg"
                ],
                "price": {
                    "value": 4500.00,
                    "installments": 10,
                    "installmentValue": 486.00
                }
            }
        },
        {
            "product": {
                "id": 9971,
                "name": "Samsung Smart TV 50 Crystal UHD 50TU8000 4K, Wi-fi, Borda Infinita, Alexa built in, Controle Único, Visual Livre de Cabos, Modo Ambiente Foto e Processador Crystal 4K",
                "images": [
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997P1.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997_2GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997_3GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997_7GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997_8GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997_9SZ.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1618005/9/1618005997_13SZ.jpg"
                ],
                "price": {
                    "value": 2500,
                    "installments": 10,
                    "installmentValue": 264.00
                }
            }
        },
        {
            "product": {
                "id": 6717131,
                "name": "Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels",
                "images": [
                    "https://images-submarino.b2w.io/produtos/01/00/img/1587203/4/1587203447P1.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1587203/4/1587203447_2GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1587203/4/1587203447_3GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1587203/4/1587203447_4GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1587203/4/1587203447_5GG.jpg"
                ],
                "price": {
                    "value": 1999.20,
                    "installments": 10,
                    "installmentValue": 235.20
                }
            }
        },
        {
            "product": {
                "id": 782191,
                "name": "Notebook Lenovo Ideapad S145 8ª Intel Core I3 4GB 1TB W10 15.6 Prata",
                "images": [
                    "https://images-submarino.b2w.io/produtos/01/00/img/1508129/5/1508129542_2SZ.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1508129/5/1508129542P1.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1508129/5/1508129542_2GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1508129/5/1508129542_5GG.jpg",
                    "https://images-submarino.b2w.io/produtos/01/00/img/1508129/5/1508129542_6GG.jpg"
                ],
                "price": {
                    "value": 2599.00,
                    "installments": 10,
                    "installmentValue": 259.90
                }
            }
        }
    ]
}`

let itemObj = JSON.parse(itemJson)

let tam = itemObj.items[0].product.images[0];
console.log(tam)
let i = 0;
const c = (el) => document.querySelector(el);


itemObj.items.map((item, index)=>{
    let productItem = document.querySelector('.container .models .product-item').cloneNode(true)

     // Gallery
     itemObj.items.forEach((item) => {
        item.product.images.forEach((image) => {
            if(item.product.id == 782191){
            let img = document.createElement('img');
            img.src = image;
            c('.product-item--img').append(img);
            }
        })
      })
/*
    c('.product-item--img1').innerHTML = `<img src="${item.product.images[0]}" alt="">`
    c('.product-item--img2').innerHTML = `<img src="${item.product.images[1]}" alt="">`
    c('.product-item--img3').innerHTML = `<img src="${item.product.images[2]}" alt="">`
    c('.product-item--img4').innerHTML = `<img src="${item.product.images[3]}" alt="">`
*/

    // Area Financeira do produto
    c('.product-item--name').innerHTML = `${item.product.name}`
    c('.product-item--installments').innerHTML = `${item.product.price.installments}x R$`
    c('.product-item--instalmentsValueSpan').innerHTML = `R$ ${item.product.price.installmentValue}`
    c('.product-item--value').innerHTML = `ou R$ ${item.product.price.value} a vista`
  
    c('.product-area').append( productItem )
  })

 