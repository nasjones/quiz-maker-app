import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foot from '../foot';


export default class Signup extends Component {

    render() {
        return (
            <div id='homepage'>
                <div className="user-options">
                    <Link to={'/signup'}>Signup</Link> / <Link to={'/login'}>Login</Link>
                </div>
                <h1 className='landingTitle'>QUIZ BOWL</h1>
                <div className='buttonWrap'>
                    <Link to={'/createPrompt'} className='homeNav greenButton' >CREATE YOUR OWN QUIZ</Link>
                    <br />
                    <Link to={'/existing-quizzes'} className='homeNav yellowButton'>EXPLORE OUR QUIZZES</Link>
                </div>
                <Foot />
            </div>
        )
    }
}