var num = parseInt(prompt("Enter Number"));
var data = '';
for(var i=1;i<=10;i++){
    data += num+" x "+i+" = "+(num*i)+" \n ";
}
var content = <div>{alert(data)}</div>

export default content;