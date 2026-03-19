import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import Display from './Display.js';

class MyComponent extends React.Component{
    state={
        obj:{},
        arr:[],
        index:-1
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
        if(this.state.index==-1){
            this.setState({
                arr:[
                    ...this.state.arr,
                    this.state.obj
                ]
            });
        }else{
            this.state.arr.splice(this.state.index,1,this.state.obj);
            this.setState({
                arr:[...this.state.arr]
            });
            this.setState({
                index : -1
            })
        }
        event.target.reset();
        this.setState({
            obj:{
                username:'',
                email:'',
                password:'',
                address:''
            }
        })
    }
    updateData = (userObj)=>{
        this.setState({
            obj : userObj.obj
        });
        this.setState({
            index : userObj.index
        });
    }
    deleteData = (index)=>{
        // alert(index);
        this.state.arr.splice(index,1);
        this.setState({
            arr:[...this.state.arr]
        });
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
                    value={this.state.obj.username}
                    onChange={this.getData}
                /> <br/>
                Email <br/>
                <input
                    type="email"
                    placeholder='Enter Email'
                    name="email"
                    id="email"
                    required
                    value={this.state.obj.email}
                    onChange={this.getData}
                /> <br/>
                Password <br/>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    id="password"
                    required
                    value={this.state.obj.password}
                    onChange={this.getData}
                /> <br/>
                Address <br/>
                <input
                    type="text"
                    placeholder='Enter Address'
                    name="address"
                    id="address"
                    required
                    value={this.state.obj.address}
                    onChange={this.getData}
                /> <br/>
                <input
                    type="submit"
                    value={this.state.index==-1 ? "Add Data" : "Update Data"}
                />
                <input
                    type="reset"
                    value="Reset Data"
                /> <br/>
            </form>
        </div>
        <div style={{width:"75%",float:"left"}}>
            <Display data={this.state.arr} deleteFun={this.deleteData} updateFun={this.updateData}/>    
        </div>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent/>);