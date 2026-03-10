var num = parseInt(prompt("Enter Number"));
var data = [];
for(var i=1;i<=10;i++){
    data.push(num+" x "+i+" = "+(num*i));
}
var content = data.map((line,index)=>{
    return <div>{line}</div>
})

export default content;