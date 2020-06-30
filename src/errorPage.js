import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import config from './config';
import './Homepage.css';


export default class Homepage extends Component {

    render() {
        return (
            <div id="homepage">
                <h1 className="landingTitle">QUIZ BOWL</h1>
                <h2 className="error">Sorry there was a problem processing your request, try something else or try again later.</h2>
                <div className="buttonWrap">
                    <Link to={'/'} className="homeNav greenButton" >GO HOME</Link>
                    <br />

                </div>
                <div className="foot">made by <a href="http://nassirjones.com" target="_blank" rel="noopener noreferrer" className="webLink">Nassir Jones</a></div>
            </div>
        )
    }
}