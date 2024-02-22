let goToGoa = (success,failure)=>{
    let acc_Bal = 1000;

    acc_Bal>50000? success("Go to Goa! enjoy"): failure("Go to PG! sleep")
}

goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})