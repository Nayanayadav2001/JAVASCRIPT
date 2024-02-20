let emp={
    id:101,
    name:'siri',
    sal:50000,
}
//let new_Emp={...emp}

let new_Emp={}
for(prop in emp){
    new_Emp[prop]=emp[prop]
}

console.log(new_Emp)