import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './question.css';


export default class QuizBox extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div className="quizWrap">
                <Link to={`/takeQuiz/${this.props.id}`}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.desc}</p>
                </Link>
            </div>
        )
    }
}
