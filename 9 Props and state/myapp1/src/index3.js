import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    const [obj,setObj] = useState({});
    const [flag,setFlag] = useState(false);
    const getData = (event)=>{
        const {name,value} = event.target;
        setObj({
            ...obj,
            [name] : value
        });    
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setFlag(true);
        event.target.reset();
    }
        return(<>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
                Username <br/>
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    id="username"
                    required
                    onChange={getData}
                /> <br/>
                Email <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    onChange={getData}
                /> <br/>
                Password <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    required
                    onChange={getData}
                /> <br/>
                Address <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    required
                    onChange={getData}
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
        { flag ? (<div>
            <b>Username : {obj.username}</b> <br/>
            <b>Email : {obj.email}</b> <br/>
            <b>Password : {obj.password}</b> <br/>
            <b>Address : {obj.address}</b> <br/>
        </div>): ("") }            

        </>);
}


createRoot(document.getElementById("root")).render(<MyComponent/>);