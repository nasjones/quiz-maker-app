import React, { Component } from 'react';
import QuizBox from './quizBox'
import QuizContext from '../QuizContext'
import './quizBox.css'

// import './question.css';


export default class existingQuiz extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <QuizContext.Consumer>
                {(value) => {
                    const listed = value.quiz.map(quiz => {
                        return (
                            <QuizBox key={quiz.unique_key} id={quiz.unique_key} title={quiz.title} desc={quiz.description} />
                        )
                    })
                    return (
                        <div className="quizPage">
                            {listed}
                        </div>
                    )

                }}
            </QuizContext.Consumer>
        )
    }
}
