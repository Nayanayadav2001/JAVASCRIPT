let conditions=false;
const greet=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (conditions){
            resolve("Hello")
        }
        else{
            reject("this condition failed")
        }
    },2000);
});

greet.then((result)=>{
     console.log(result);
})
.catch(function(error){
    console.log(error);
});
