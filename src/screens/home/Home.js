import React, { Component } from 'react'
import Header from '../../commom/header/Header'
import './Home.css'

export class Home extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="upcoming-movies-heading">Upcoming Movies</div>
            </div>
        )
    }
}

export default Home
