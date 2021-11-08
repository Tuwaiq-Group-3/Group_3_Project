import {useSelector,useDispatch} from 'react-redux';
import { setLoginState } from '../reducers/loginState/actions';
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () =>{

const navigate = useNavigate();
const  dipatch=useDispatch();
const [userName,setUserName]=useState('');
const [password,setPassword1]=useState('');



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


const login=()=>{
state.users.users.map((e)=>{
    if(e.name==userName &&e.password==password){
        const action = setLoginState(e.id);  
        dipatch(action)   
        console.log(" login yes: "+e.id);
        navigate("/products");
    }else{
        setMatch(false);  
        console.log(" login Noooo");
    }
   
return <h1>hi user</h1>
})

}


const [match, setMatch] = useState(true);



return (
    <div className="Details position-relative">
    <div className="continer card text-center position-absolute top-50 start-50 translate-middle card_d">
    <form className="form   " id="login">
        <h1 className="form_title">Login</h1>
        <div  className={match ? "form_message form_message-error m-hidden " : "form_message form_message-error "}>invalid username or password combination</div>
       
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
            <a className="form_link" href="#" id="linkCreateAccount" onClick={()=>{navigate("/sign_up");}} >Don't have an account? Create account </a>
        </p>

    </form>

</div>
</div>

)
}

export default Login;