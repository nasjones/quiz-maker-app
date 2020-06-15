import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h2>Quiz creation rules.</h2>
                <ul>
                    <li>All quizzes require a title.</li>
                    <li>All questions require all 4 options.</li>
                    <li>The description for the quiz is optional</li>
                    <li>If you do not choose personal styling for your quiz it will be the default</li>
                    <li>Private quizzes will only be accessible by the link given to you.</li>
                </ul>
                <br />
                <Link to={'/quizCreate'}>Continue.</Link>
            </div>
        )
    }
}