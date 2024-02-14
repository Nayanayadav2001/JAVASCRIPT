/*function changeCase(){
    let message=document.getElementById('uname').value
alert(message.toUpperCase())
document.getElementById('uname').value =message.toUpperCase()
}*/

function changeCase(){
    let input_ref=document.getElementById('uname')
    let message=input_ref.value;
    input_ref.value = message.toUpperCase()
}

let changeColor=()=>{
    let input_ref=document.getElementById('uname')
    input_ref.style.backgroundColor="blue"
}