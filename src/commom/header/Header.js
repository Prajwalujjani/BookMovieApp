import React from 'react'
import "./Header.css"
import ReactLogo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';


function Header() {
    return (
        <div>
            <div className="header">
                <img className="logo rotate linear infinite" src={ReactLogo} alt=''/>
                <Button variant="contained" className="btnLogin">Login</Button> 
            </div>
            
        </div>
    )
}

export default Header





