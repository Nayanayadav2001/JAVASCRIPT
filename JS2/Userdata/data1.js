let employees=[
    {id:101,name:'siri',sal:45000},
    {id:102,name:'shruthi',sal:50000},
    {id:103,name:'usha',sal:55000},
    {id:104,name:'sunil',sal:60000},
]
function display_empdata(){
    let row=""
    var i=0;
    while(i<=employees.length-1){
        rows = rows+`<tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].sal}</td>
        </tr>`
        i++;
    }
}
    document.getElementById('abc').innerHTML=rows;
