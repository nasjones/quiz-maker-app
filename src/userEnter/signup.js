import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Homepage.css';


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
                <div className='foot'>made by <a href='http://nassirjones.com' target='_blank' rel='noopener noreferrer' className='webLink'>Nassir Jones</a></div>
            </div>
        )
    }
}