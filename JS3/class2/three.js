class Account{
    acc_id;
    acc_name;
    acc_bal;

    constructor(id,name,amount){
        this.acc_id=id
        this.acc_name=name
        this.acc_bal=amount
        console.log("Account class constructor")
    }
    get_Details(){
    }
}
var a1=new Account(101,"siri",1500)
console.log(a1)
var a2=new Account(102,"shruthi",8000)
console.log(a2)