let goToGoa=(success,failure)=>{
    let bal=41000;
    if(bal>40000){
        success("Go to Goa! enjoy")
    }
    else{
        failure("Go to PG! sleep")
    }
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})