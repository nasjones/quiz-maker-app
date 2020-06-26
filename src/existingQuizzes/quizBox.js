import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './quizBox.css';


export default class QuizBox extends Component {

    render() {
        console.log(this.props)
        if (this.props.type === 0)
            return (
                <div className="quizWrap yellowBox">
                    <div className="qBoxLink">
                        <Link to={`/takeQuiz/${this.props.id}`} className="qBoxLink">
                            <h2>{this.props.title}</h2>
                            <h3>Category: {this.props.category}</h3>
                            <p>{this.props.desc}</p>
                        </Link>
                    </div>
                </div>
            )
        else
            return (
                <div className="quizWrap redBox">
                    <div className="qBoxLink">
                        <Link to={`/takeQuiz/${this.props.id}`} >
                            <h2>{this.props.title}</h2>
                            <h3>genre:</h3>
                            <p>{this.props.desc}</p>
                        </Link>
                    </div>
                </div>
            )
    }
}
