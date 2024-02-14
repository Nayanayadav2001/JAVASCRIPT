class Parent{
     constructor(){
         console.log("Parent class constructor")
     }
 }
class child extends Parent{
    constructor(){
        super()
        console.log("Child class constructor")
    }

}
new child()