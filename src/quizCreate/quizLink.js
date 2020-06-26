import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizContext from '../QuizContext'

export default class QuizLink extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <QuizContext.Consumer>
                {(value) => {
                    value.pageUpdate();
                    return (
                        <div>
                            <Link to={this.props.link}>Access your quiz using this link</Link>
                            <Link to={'/'}>Return Home</Link>
                        </div>
                    )
                }
                }
            </QuizContext.Consumer>
        )
    }
}