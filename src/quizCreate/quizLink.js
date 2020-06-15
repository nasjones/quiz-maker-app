import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class QuizLink extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <Link to={this.props.link}>Access your quiz using this link</Link>
                <Link to={'/'}>Return Home</Link>
            </div>
        )
    }
}