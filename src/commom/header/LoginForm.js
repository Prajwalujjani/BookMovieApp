import React from 'react'
import { TextField, Button } from '@material-ui/core'
import './LoginResgisterForm.css'


function Login() {
    return (
        <div className="center">
            <form >
                <TextField label="Username" required/><br />
                <TextField label="Password" required/><br /><br /><br />                               
            </form>
            <Button  variant="contained" color="primary" >
                    Login
            </Button> 
        </div> 
    )
}

export default Login
