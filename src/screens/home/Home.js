import React, { Component } from 'react'
import Header from '../../commom/header/Header'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="upcoming-movies-heading">Upcoming Movies</div>
            </div>
        )
    }
}

export default Home
