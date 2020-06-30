import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import QuizContext from '../QuizContext'

export default class QuizLink extends Component {
    // constructor(props) {
    //     super(props)
    // }

    // componentDidMount() {
    //     console.log(this.props)
    // }

    render() {
        // 
        return (

            // <QuizContext.Consumer>
            //     {(value) => {
            //         // value.pageUpdate();
            //         return (
            <div id="homepage">
                <h1 className="landingTitle">QUIZ BOWL</h1>
                <div className="buttonWrap">
                    <Link to={this.props.match.params.newId} className="homeNav greenButton">Access your quiz using this link</Link>
                    <Link to={'/'} className="homeNav yellowButton">Return Home</Link>
                </div>
            </div>
            // )
            // }
            // }
            // </QuizContext.Consumer>
        )
    }
}