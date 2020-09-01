import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foot from '../foot';


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
                <Foot />
            </div>
        )
    }
}