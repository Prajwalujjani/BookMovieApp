import React from 'react'
import { TextField, Button } from '@material-ui/core'
import './LoginResgisterForm.css'


function Register() {
    return (
        <div className="center">
            <form >
                <TextField label="First Name" required/><br />
                <TextField label="Last Name" required/><br />                               
                <TextField label="Email" required/><br />                               
                <TextField label="Password" required/><br />                               
                <TextField label="Contact No" required/><br /><br /><br /><br />                               
            </form>
            <Button  variant="contained" color="primary" >
                    Register
            </Button> 
        </div> 
    )
}

export default Register
 