class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        console.log("Parent class constructor")
        this.acc_Name=name
        this.acc_Email=email 
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id
        this.acc_Bal=amount 
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=2500
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id
        this.acc_Bal=amount 
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal 
    }
}
let sa1=new SA(101,'siri','siri@gmail.com',5000)

let ca1=new CA(102,'shruthi','shru@gmail.com',25000)

console.log(sa1.get_Bal())

console.log(ca1.get_Bal())