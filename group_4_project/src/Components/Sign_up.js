import {useSelector,useDispatch} from 'react-redux';
import {setUsers} from '../reducers/Users/Action';
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Sign_up = () =>{

const navigate = useNavigate();
const  dipatch=useDispatch();
const [userName,setUserName]=useState('');
const [password,setPassword1]=useState('');
const [password2,setPassword2]=useState('');
const [users,setUser]=useState();


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
    if((userEmail).includes("@gmail.com")||(userEmail).includes("@hotmail.com")||(userEmail).includes("@yahoo.com")|| (userEmail).includes("@outlook.com")){
        setEmail(true)
        navigate("/login");
    }else 
    setEmail(false) 
   if(password2===password){ 
       console.log("password match");
       const action = setUsers({userName, password});  
        dipatch(action)  
      
    }else{
        setMatch(false)
        console.log("password not match !!!");
    }

}

const email=(e)=>{
    setUserEmail(e.target.value)
}



const [match, setMatch] = useState(true);
const [matchEmail, setEmail] = useState(true);
const [userEmail,setUserEmail]=useState();

return (
    <div className="login2">

    <div className="Details position-relative login">
    <div className="continer card text-center position-absolute top-50 start-50 translate-middle card_d">

    <form  className="form" id="createAccount">
        <h1 className="form_title">Create Account</h1>
        <div className="form_message form_message-error"></div>

        <div className="form_input_group">
        <input type="text" className="form_input " id='newUserName' onChange={name} autoFocus placeholder='Username' required />
            <div className="form_input_error-message"> </div>
        </div>

        <div className="form_input_group">
        <input type="email" className="form_input " onChange={email} autoFocus placeholder='Email' required />
            <div className={matchEmail ? "form_message form_message-error m-hidden " : "form_message form_message-error "}>you have enterd an invalid e-mail please try agin.</div>
        </div>

        <div className="form_input_group">
            <input type="password" id='passwordNewUser' className="form_input " onChange={setPassword}autoFocus placeholder='Password' required/>
            <div ></div>
        </div>

        <div className="form_input_group">
            <input type="password" className="form_input " id='passwordNewUser2'  onChange={setPasswords2} autoFocus placeholder='Confirem Password' required/>
            <div className={match ? "form_message form_message-error m-hidden " : "form_message form_message-error "}>Password not match</div>
        </div>

        <button className="form_button" type="button" onClick={signUpUser}>Continue</button>
       
        <p className="form_text">
            <a className="form_link" href="#" id="linkLogin" onClick={()=>{navigate("/login");}}>Already have an account? Login</a>
        </p>


    </form>

</div>
</div>
</div>
)
}

export default Sign_up;