/*let employees=['siri','shruthi','nayana','sunil']
let new_Employees=employees.filter(function(emp_Name){
    return emp_Name.length>6
})
console.log(new_Employees)*/


let employees=['siri','shruthi','nayana','sunil']
let new_Employees=employees.map(function(emp_Name){
    return emp_Name.length>6
})
console.log(new_Employees)

