import {useSelector,useDispatch} from 'react-redux';
import {setUsers} from './Users/Action';
import {setId} from './Users/Action'
import './login.css'
import { useState } from 'react';

const Users = () =>{

const  dipatch=useDispatch();
const [userName,setUserName]=useState('');
const [password,setPassword1]=useState('');
const [password2,setPassword2]=useState('');
const [users,setUser]=useState('');


    const state =useSelector((state)=>{
       
return {
    users:state.userReducer.users,
}
    })



const name=(e)=>{
    setUserName(e.target.value)
}

const setPassword=(e)=>{
    setPassword1(e.target.value)
}

const setPasswords2=(e)=>{
    setPassword2(e.target.value)
}

const signUpUser=(e)=>{
   if(password2===password){ 
       console.log("password match");
       setUser({name:userName,password: password})
       const action = setUsers(users);  
dipatch(action)   
    }else
    console.log("password not match !!!");
}

console.log(users);
const login=()=>{
state.users.users.map((e)=>{
    if(e.name==userName &&e.password==password){
        const action = setId(e.id);  
        dipatch(action)   
        console.log(" login yes: "+e.id);
    }else
    console.log(" login Noooo");
return <h1>hi user</h1>
})

}



const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount")

const createAcountClick=()=>{
    loginForm.classList.add("form-hidden");
    createAccountForm.classList.remove("form-hidden");
}

const loginClick=()=>{
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
}




return (
    <>
    <div className="continer">
    <form className="form   " id="login">
        <h1 className="form_title">Login</h1>
        <div className="form_message form_message-error m-hidden ">invalid username or password combination</div>

        <div className="form_input_group">
            <input type="text" className="form_input " id='userN' onChange={name} autoFocus placeholder='Username' required/>
            <div className="form_input_error-message"> </div>
        </div>

        <div className="form_input_group">
            <input type="password" className="form_input " id='passwordUser'onChange={setPassword} autoFocus placeholder='Password' required/>
            <div className="form_input_error-message"></div>
        </div>
      
        <button className="form_button" id="log1" type='button'  onClick={login}>Continue</button>
        
        <p className="form_text">
            <a className="form_link" href="#" id="linkCreateAccount" onClick={createAcountClick}>Don't have an account? Create account </a>
        </p>

    </form>

    <form  className="form form-hidden" id="createAccount">
        <h1 className="form_title">Create Account</h1>
        <div className="form_message form_message-error"></div>

        <div className="form_input_group">
        <input type="text" className="form_input " id='newUserName'onChange={name} autoFocus placeholder='Username' required />
            <div className="form_input_error-message"> </div>
        </div>

        <div className="form_input_group">
            <input type="password" id='passwordNewUser' className="form_input " onChange={setPassword}autoFocus placeholder='Password' required/>
            <div className="form_input_error-message"></div>
        </div>

        <div className="form_input_group">
            <input type="password" className="form_input " id='passwordNewUser2'  onChange={setPasswords2} autoFocus placeholder='Confirem Password' required/>
            <div className="form_input_error-message m-hidden">Password not match</div>
        </div>

        <button className="form_button" type="button"  onClick={signUpUser}>Continue</button>
       
        <p className="form_text">
            <a className="form_link" href="#" id="linkLogin" onClick={loginClick}>Already have an account? Login</a>
        </p>


    </form>


</div>
</>
)
}

export default Users;