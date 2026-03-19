function Display(props){
    return (<>
        <h2>Show Details</h2>
            <table border={1}  cellSpacing={0}>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th colspan='2'>Action</th>
                </tr>
                {
                    props.data.map((obj,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                            <td>{obj.address}</td>
                            <td><button onClick={()=>{props.updateFun({obj,index})}}>Update</button></td>
                            <td><button onClick={()=>{props.deleteFun(index)}}>Delete</button></td>
                        </tr>);
                    })
                }
            </table>
    </>);
}
export default Display;