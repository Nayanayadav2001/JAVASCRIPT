class Account{
    acc_id;
    acc_name;
    acc_bal;
    constructor(id,name,amount){
        this.acc_id=id
        this.acc_name=name
        this.acc_bal=amount
    }
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }

}
let a1=new Account(101,'siri',5000)
let a2=new Account(102,'shruthi',8000)
console.log(a1)
console.log(a2)

a1.deposit_Amount(1000)
a2.deposit_Amount(2000)
console.log(a1)
console.log(a2)