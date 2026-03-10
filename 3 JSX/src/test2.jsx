function myFun(obj){
    return `Hello ${obj.name}, your age is ${obj.age} with admin status ${obj.isAdmin} and address is ${obj.address}`;
}
var obj = {
    name : "Andrew Anderson",
    age : 45,
    isAdmin : true,
    address : {
        city : "Indore",
        state : "Madhya Pradesh",
        toString(){
            return this.city+" , "+this.state
        }
    }
}
var content = <div>{myFun(obj)}</div>

export default content;