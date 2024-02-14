class GP{
    constructor(){
        console.log("GP constructor")
    }
    m1(){
        console.log("GP m1 method")
    }
}
class parent extends GP{
    constructor(){
        super()
        console.log("parent class constructor")
    }
    m2(){
        console.log("parent m2 method")
    }
}
class child extends parent{
    constructor(){
        super()
        console.log("child constructor")
    }
    m3(){
        console.log("child m3 method")
    }
}

let c1=new child()

c1.m1()
c1.m2()
c1.m3()