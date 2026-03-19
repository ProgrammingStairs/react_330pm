import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import Display from './Display.js';
function MyComponent(){
    const [obj,setObj] = useState({});
    const [arr,setArr] = useState([]);
    const [index,setIndex] = useState(-1);
    const getData = (event)=>{
        const {name,value} = event.target;
        setObj({
            ...obj,
            [name] : value
        });    
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(index==-1){
            setArr([
                ...arr,
                obj
            ]);
        }else{
            arr.splice(index,1,obj);
            setArr([...arr]);
            setIndex(-1);
        }
        event.target.reset();
        setObj({
            username:"",
            email:"",
            password:"",
            address:""
        });
    }
    const updateData = (userObj)=>{
        setObj(userObj.obj);
        setIndex(userObj.index);
    }
    const deleteData = (index)=>{
        // alert(index);
        arr.splice(index,1);
        setArr([...arr]);
    }
        return(<>
        <div style={{width:"25%",float:"left"}}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
                Username <br/>
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    id="username"
                    required
                    value={obj.username}
                    onChange={getData}
                /> <br/>
                Email <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    value={obj.email}
                    onChange={getData}
                /> <br/>
                Password <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    required
                    value={obj.password}
                    onChange={getData}
                /> <br/>
                Address <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    required
                    value={obj.address}
                    onChange={getData}
                /> <br/>
                <input
                    type="submit"
                    value={index==-1 ? "Add Data" : "Update Data"}
                />
                <input
                    type="reset"
                    value="Reset Data"
                /> <br/>
            </form>
        </div>
        <div style={{width:"75%",float:"left"}}>
            <Display data={arr} deleteFun={deleteData} updateFun={updateData}/>    
        </div>
        </>);
}


createRoot(document.getElementById("root")).render(<MyComponent/>);