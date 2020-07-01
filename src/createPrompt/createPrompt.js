import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './createPrompt.css'


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h1 className='cornerTitle'>QUIZ BOWL</h1>
                <div className='promptWrap'>
                    <h2>Before we begin, here's what you need to know:</h2>
                    <ul>
                        <li><span className='listText'>Answers provided that are identical will both be considered correct no matter which one you set as the correct answer.</span></li>
                        <li><span className='listText'>Private quizzes are only available at the link provided to you after you make your quiz. Don’t lose this link!</span></li>
                        <li><span className='listText'>Just in case you do, email us at: <a href='mailto:nassircjones@gmail.com' className='email'>nassircjones@gmail.com</a> as soon as possible and we’ll try to get it right back.</span></li>
                    </ul>
                    <br />
                    <div className='buttonWrap'>
                        <Link to={'/'} className='promptNav yellowButton'>GO BACK</Link>
                        <Link to={'/quizCreate'} className='promptNav greenButton'>READY TO CREATE</Link>
                    </div>
                </div>
                <div className='foot'>made by <a href='http://nassirjones.com' target='_blank' rel='noopener noreferrer' className='webLink'>Nassir Jones</a></div>
            </div >
        )
    }
}