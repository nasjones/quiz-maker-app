import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h2>Do you know as much as you think you do?</h2>
                <Link to={'/createPrompt'}>Create your own quiz.</Link>
                <br />
                <Link to={'/existing-quizzes'}>See what we have.</Link>
            </div>
        )
    }
}