import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class QuizLink extends Component {

    render() {

        return (

            <div id='homepage'>
                <h1 className='landingTitle'>QUIZ BOWL</h1>
                <div className='buttonWrap'>
                    <Link to={`/takeQuiz/${this.props.match.params.newId}`} className='homeNav greenButton'>Access your quiz using this link</Link>
                    <Link to={'/'} className='homeNav yellowButton'>Return Home</Link>
                </div>
            </div>

        )
    }
}