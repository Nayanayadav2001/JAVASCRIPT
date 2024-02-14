class Account{
    acc_id=101;
    acc_name='siri';
    acc_bal=50000;

    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl(){
        console.log("Transaction Successful")
    }
    get_bal(){
        console.log("Insufficient Balance")
    }
    close_Account(){
        console.log("Insufficient Balance! Please deposit more funds")
    }
    
    }
    
let a1=new Account()
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_bal()
a1.close_Account()




