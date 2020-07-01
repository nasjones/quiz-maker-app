import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';


export default class Homepage extends Component {

    render() {
        return (
            <div id='homepage'>
                <h1 className='landingTitle'>QUIZ BOWL</h1>
                <h2 className='error'>Sorry what you were looking for doesn't exist here.</h2>
                <div className='buttonWrap'>
                    <Link to={'/'} className='homeNav greenButton' >GO HOME</Link>
                    <br />

                </div>
                <div className='foot'>made by <a href='http://nassirjones.com' target='_blank' rel='noopener noreferrer' className='webLink'>Nassir Jones</a></div>
            </div>
        )
    }
}