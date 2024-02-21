let sum=(a,b)=>{
    return a+b 
}
let multi=(a,b)=>{
    return a*b 
}
/*let r1=sum(1,2)
let r2=multi(2,3)
console.log(r1)
console.log(r2)*/

let calc=(a,b,callback)=>{
    return callback(a,b)
}
let r1=calc(10,20,sum)
let r2=calc(1,3,multi)
console.log(r1)
console.log(r2)