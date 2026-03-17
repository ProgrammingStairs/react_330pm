import React from 'react';
import {createRoot} from 'react-dom/client';

class MyComponent extends React.Component{
    state = {
        obj : {},
        flag : false
    }
    getData = (event)=>{
        const {name,value} = event.target;
        this.setState({
            obj:{
                ...this.state.obj,
                [name] : value
            }
        });    
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({flag:true});
        console.log(this.state.obj);
        event.target.reset();
    }
    render(){
        return(<>
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
        { this.state.flag ? (<div>
            <b>Username : {this.state.obj.username}</b> <br/>
            <b>Email : {this.state.obj.email}</b> <br/>
            <b>Password : {this.state.obj.password}</b> <br/>
            <b>Address : {this.state.obj.address}</b> <br/>
        </div>): ("") }            

        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent/>);