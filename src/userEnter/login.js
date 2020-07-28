import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Homepage.css';


export default class Login extends Component {

    render() {
        return (
            <div id='homepage'>
                <div className="user-options">
                    <Link>Signup</Link> / <Link>Login</Link>
                </div>
                <h1 className='landingTitle'>QUIZ BOWL</h1>
                <form>

                </form>
                <div className='foot'>made by <a href='http://nassirjones.com' target='_blank' rel='noopener noreferrer' className='webLink'>Nassir Jones</a></div>
            </div>
        )
    }
}