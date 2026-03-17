import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

class MyComponent extends React.Component{
    state = {
        obj:{},
        arr:[]
    }
    getData = (event)=>{
        const {name,value} = event.target;
        this.setState({
            obj : {
                ...this.state.obj,
                [name]:value
            }
        });
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            arr : [
                ...this.state.arr,
                this.state.obj
            ]
        });
        event.target.reset();
    }
    render(){
        return(<>
        <div style={{width:"25%",float:"left"}}>
            <h2>Fill Details</h2>
            <form onSubmit={this.handleSubmit}>
                Username <br/>
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    id="username"
                    required
                    onChange={this.getData}
                /> <br/>
                Email <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    onChange={this.getData}
                /> <br/>
                Password <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    required
                    onChange={this.getData}
                /> <br/>
                Address <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    required
                    onChange={this.getData}
                /> <br/>
                <input
                    type="submit"
                    value="Add Data"
                />
                <input
                    type="reset"
                    value="Reset Data"
                /> <br/>
            </form>
        </div>
        <div style={{width:"75%",float:"left"}}>
            <h2>Show Details</h2>
            <table border={1}  cellSpacing={0}>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                </tr>
                {
                    this.state.arr.map((obj,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                            <td>{obj.address}</td>
                        </tr>);
                    })
                }
            </table>
        </div>
        </>);
    }
}
// function MyComponent(){
//     const [obj,setObj] = useState({});
//     const [arr,setArr] = useState([]);
//     const getData = (event)=>{
//         const {name,value} = event.target;
//         setObj({
//             ...obj,
//             [name] : value
//         });    
//     }
//     const handleSubmit = (event)=>{
//         event.preventDefault();
//         setArr([
//             ...arr,
//             obj
//         ]);
//         event.target.reset();
//     }
//         return(<>
//         <div style={{width:"25%",float:"left"}}>
//             <h2>Fill Details</h2>
//             <form onSubmit={handleSubmit}>
//                 Username <br/>
//                 <input
//                     type="text"
//                     placeholder='Enter Username'
//                     name="username"
//                     id="username"
//                     required
//                     onChange={getData}
//                 /> <br/>
//                 Email <br/>
//                 <input
//                     type="email"
//                     placeholder='Enter Email'
//                     name="email"
//                     id="email"
//                     required
//                     onChange={getData}
//                 /> <br/>
//                 Password <br/>
//                 <input
//                     type="password"
//                     placeholder='Enter Password'
//                     name="password"
//                     id="password"
//                     required
//                     onChange={getData}
//                 /> <br/>
//                 Address <br/>
//                 <input
//                     type="text"
//                     placeholder='Enter Address'
//                     name="address"
//                     id="address"
//                     required
//                     onChange={getData}
//                 /> <br/>
//                 <input
//                     type="submit"
//                     value="Add Data"
//                 />
//                 <input
//                     type="reset"
//                     value="Reset Data"
//                 /> <br/>
//             </form>
//         </div>
//         <div style={{width:"75%",float:"left"}}>
//             <h2>Show Details</h2>
//             <table border={1}  cellSpacing={0}>
//                 <tr>
//                     <th>S.No</th>
//                     <th>Username</th>
//                     <th>Email</th>
//                     <th>Password</th>
//                     <th>Address</th>
//                 </tr>
//                 {
//                     arr.map((obj,index)=>{
//                         return(<tr>
//                             <td>{index+1}</td>
//                             <td>{obj.username}</td>
//                             <td>{obj.email}</td>
//                             <td>{obj.password}</td>
//                             <td>{obj.address}</td>
//                         </tr>);
//                     })
//                 }
//             </table>
//         </div>
//         </>);
// }

createRoot(document.getElementById("root")).render(<MyComponent/>);