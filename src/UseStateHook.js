import { useState } from "react";
const initial = {
    name : '',
    email : '',
    password : '',
    phone : '',
    city : ''
}
function ObjectExample(){
    const [form, setForm] = useState(initial);
    
    function onEntered(event){
        setForm({...form,  [event.target.name] : event.target.value});
    }

    return(
        <>
        <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type = 'name' name = 'name' placeholder="Your name" onChange={onEntered}></input> <br/>
        <label>Email </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type = 'email' name = 'email' placeholder="Your email" onChange={onEntered}></input> <br/>
        <label>Password</label>&nbsp;&nbsp;&nbsp;
        <input type = 'password' name = 'password' placeholder="Password" onChange={onEntered}></input> <br/>
        <label>Phone</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type = 'text' name = 'phone' placeholder="Your Phone Number" onChange={onEntered}></input> <br/>
        <label>City </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type = 'text' name = 'city' placeholder="Your City" onChange={onEntered}></input> 
        <div>
            <h5>YourDetails </h5>
            <ul style = {{'list-style':"none", padding : "2px"}}>
                <li>{form.name}</li>
                <li>{form.email}</li>
                <li>{form.phone}</li>
                <li>{form.city}</li>
            </ul>
        </div>
        </>
    )
}


function UseStateExample(){
    const [cnt, setCount] = useState(0);
    function incrementclick(){
        setCount(cnt + 1);
        console.log(cnt+1);
    }
    const [search, setSearch] = useState('');

    function searchChange(event){
        setSearch(event.target.value);
        console.log(event.target.value);
    }
    return(
        <>
        <button onClick={incrementclick}>Increment</button>
        {cnt}
        <br></br>
        <input type = 'text' onChange={searchChange} placeholder='search...'></input>
        {search}

        <div>
            <h4>Form</h4>
            <ObjectExample/>
        </div>
        </>
    )
}

export default UseStateExample;