let emp={
    id:101,
    name:'siri',
    email:'siri@gmail.com',
}

let details={
    email:'siri@ibm.com',
    loc:'karnataka',
    sal:50000
}

let emp_Details={...emp,...details}

console.log(emp_Details)