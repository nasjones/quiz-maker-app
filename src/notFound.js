import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foot from './foot'
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
                <Foot />
            </div>
        )
    }
}