let employees=[ {id:101,name:"siri",sal:45000},
                {id:102,name:"shru",sal:55000}
                ]

let createEmployee=(emp,callback)=>{
    //represent time
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },10000)
}

let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(employee of employees){
            rows = rows +`<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                           </tr>`
        }
        document.getElementById('abc').innerHTML  = rows
    },2000)
}

createEmployee({id:103,name:"Priya",sal:65000},getEmployees)