let product={
    pid:'p101',
    pname:'Iphone',
    price:18000,
    color:['green','blue','grey']
}
for(key in product){
    console.log(key,":",product[key])
}
console.log(product.color[1])