import React, {useState} from 'react'
import { TextField, Button } from '@material-ui/core'
import './LoginResgisterForm.css'


function LoginForm(props) {
const [email, setEmail] = useState("")
const [Password, setPassword] = useState("")

function Login(){
     
    const authorization=window.btoa(email+":"+Password)
    const headers= {
        "Accept": "application/json;charset=UTF-8",
        "authorization":"Basic " + authorization
      }        
   
    fetch(props.baseUrl + "auth/login", {
        method: "POST",
        headers        
    })
        .then((response) =>  
        response.json())
        .then((data) => {
          //setBookingId(data.reference_number);
          const userDetails = {data, loginStatus:true}
            localStorage.setItem("userDetails", JSON.stringify(userDetails))
            props.setLoginStatus(true)
            props.setIsOpen(false)
        });      
}

    return (
        <div className="center">
            <form >
                <TextField label="Username" required 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}/><br />
                <TextField label="Password" required 
                onChange={(e)=>setPassword(e.target.value)}
                value={Password}/><br /><br /><br />                               
            </form>
            <Button onClick={Login} variant="contained" color="primary" >
                    Login
            </Button> 
        </div> 
    )
}

export default LoginForm
