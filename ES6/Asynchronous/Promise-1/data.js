let employees=[
    {id:101,name:"siri",sal:45000},
    {id:102,name:"shru",sal:55000}
]


let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let dbstatus=true
            if(dbstatus){
                resolve("Data inserted")
                employees.push(emp)
            }
            else{
                reject("Failed")
            }
        },4000)
    })
}

let getEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        employees.forEach((employee)=>{
            rows=rows+`<tr>
                           <td>${employee.id}</td>
                           <td>${employee.name}</td>
                           <td>${employee.sal}</td>
                       </tr>`
        })
        document.getElementById('abc').innerHTML=rows
    },2000)
}

createEmployee({id:103,name:"nayana",sal:65000})
.then((msg)=>{
    console.log(msg)
    getEmployee()
})
.catch((err)=>{
    console.log(err)
})