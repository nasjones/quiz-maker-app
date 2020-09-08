import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './quizCreate.css';
import Question from './question';
import FormHead from './re-used/formHead';
import Tail from './re-used/formTail'
import config from '../config';
import Foot from '../foot';

export default class quizCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subAttempt: false,
            count: 1,
            title: '',
            questions: [],
            description: '',
            private: false,
            category: '',
            submitted: false,
            error: null
        }
    }

    addQuestion = (e) => {
        e.preventDefault()
        this.setState({
            count: this.state.count + 1,
            subAttempt: false
        })
    }

    delQuestion = (e) => {
        e.preventDefault()
        this.setState({
            count: this.state.count - 1
        })
    }

    titleUpdate = (title) => {
        this.setState({
            title
        })
    }

    categoryUpdate = (category) => {
        this.setState({
            category
        })
    }

    questChange = (i, question) => {
        if (question !== undefined)
            question = question.replace(/\s+/g, ' ').trim()
        else
            question = ''
        let tempArr = this.state.questions
        if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('correct')
        ) {
            let tempAns = tempArr[i].answers
            let tempCorr = tempArr[i].correct
            tempArr[i] = { question: question, answers: tempAns, correct: tempCorr }
        }
        else if (tempArr[i]
            && !tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('correct')
        ) {
            let tempCorr = tempArr[i].correct
            tempArr[i] = { question: question, correct: tempCorr }
        }
        else if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && !tempArr[i].hasOwnProperty('correct')
        ) {
            let tempAns = tempArr[i].answers
            tempArr[i] = { question: question, answers: tempAns }
        }
        else {
            tempArr[i] = { question: question }
        }
        this.setState({
            questions: tempArr
        })
    }

    answerChange = (i, j, answer) => {
        let tempArr = this.state.questions
        if (answer !== undefined)
            answer = answer.replace(/\s+/g, ' ').trim()
        else
            answer = ''
        if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('correct')
            && tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = tempArr[i].answers
            let questHold = tempArr[i].question
            let corrHold = tempArr[i].correct
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns, correct: corrHold }
        }
        else if (tempArr[i]
            && !tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('correct')
            && tempArr[i].hasOwnProperty('question')
        ) {
            let questHold = tempArr[i].question
            let tempAns = []
            let corrHold = tempArr[i].correct
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns, correct: corrHold }
        }
        else if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('correct')
            && !tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = tempArr[i].answers
            let corrHold = tempArr[i].correct
            tempAns[j] = answer
            tempArr[i] = { answers: tempAns, correct: corrHold }
        }
        else if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && !tempArr[i].hasOwnProperty('correct')
            && tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = tempArr[i].answers
            let questHold = tempArr[i].question
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns }
        }
        else if (tempArr[i]
            && !tempArr[i].hasOwnProperty('answers')
            && !tempArr[i].hasOwnProperty('correct')
            && tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = []
            tempAns[j] = answer
            let questHold = tempArr[i].question
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns }
        }
        else if (tempArr[i]
            && !tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('correct')
            && !tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = []
            tempAns[j] = answer
            let tempCorr = tempArr[i].correct
            tempArr[i] = { answers: tempAns, correct: tempCorr }
        }
        else if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && !tempArr[i].hasOwnProperty('correct')
            && !tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = tempArr[i].answers
            tempAns[j] = answer
            tempArr[i] = { answers: tempAns }
        }
        else {
            let tempAns = []
            tempAns[j] = answer
            tempArr[i] = { answers: tempAns }
        }

        this.setState({
            questions: tempArr
        })
    }

    correctChange = (i, ans) => {
        if (ans !== undefined)
            ans = ans.replace(/\s+/g, ' ').trim()
        else
            ans = ''

        let tempArr = this.state.questions
        if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && tempArr[i].hasOwnProperty('question')
        ) {
            let tempAns = tempArr[i].answers
            let questHold = tempArr[i].question
            tempArr[i] = { question: questHold, answers: tempAns, correct: ans }
        }
        else if (tempArr[i]
            && tempArr[i].hasOwnProperty('question')
            && !tempArr[i].hasOwnProperty('answers')
        ) {
            let questHold = tempArr[i].question
            tempArr[i] = { question: questHold, correct: ans }
        }
        else if (tempArr[i]
            && tempArr[i].hasOwnProperty('answers')
            && !tempArr[i].hasOwnProperty('question')
        ) {
            let ansHold = tempArr[i].answers
            tempArr[i] = { answers: ansHold, correct: ans }
        }
        else {
            tempArr[i] = { correct: ans }
        }

        this.setState({
            questions: tempArr
        })
    }

    descUpdate = (text) => {
        this.setState({
            description: text,
        })
    }

    subtrue() {
        this.setState({
            subAttempt: true
        })
    }

    poster(quizInput, questInput) {
        fetch(config.ENDPOINT + '/quiz', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.REACT_APP_API_KEY}`
            },
            body: JSON.stringify(quizInput)
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        }).then(quiz => {
            for (let i = 0; i < questInput.length; i++) {
                let questObj = {
                    quiz_id: quiz.unique_key,
                    question: questInput[i].question,
                    answers: questInput[i].answers,
                    correct: questInput[i].correct
                }
                fetch(config.ENDPOINT + '/questions', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${config.REACT_APP_API_KEY}`
                    },
                    body: JSON.stringify(questObj)
                }).then(res => {
                    if (!res.ok)
                        return res.json().then(e => Promise.reject(e))
                    return res.json()
                }).then(questions => {
                    if (i === questInput.length - 1)
                        this.props.history.push(`/quizLink/${quiz.unique_key}`)
                }).catch(errorTwo => {
                    console.error({ errorTwo })
                    this.props.history.push('/error')
                    i = 100
                })
            }
        }).catch(errorOne => {
            console.error({ errorOne })
        })
    }

    empty(data) {
        if (typeof (data) == 'number' || typeof (data) == 'boolean') {
            return false;
        }
        if (typeof (data) == 'undefined' || data === null) {
            return true;
        }
        if (typeof (data.length) != 'undefined') {
            return data.length === 0;
        }
        var count = 0;
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                count++;
            }
        }
        return count === 0;
    }

    buttonShake() {
        let butt = document.getElementById('quizSub')
        butt.classList.add('shaker')
        butt.addEventListener('animationend', (e) => {
            butt.classList.remove('shaker');
        });
        // window.scrollTo(document.getElementsByClassName('error')[0].offsetHeight)
        let err = document.getElementsByClassName('error')
        console.log(err[0])
    }

    subHandle = (e) => {
        e.preventDefault()
        this.subtrue()

        if (this.state.descLength > 300
            || this.state.title === ''
            || this.state.category === ''
        ) {
            this.buttonShake()
            return;
        }

        let descHold = this.state.description

        for (let i = 0; i < this.state.questions.length; i++) {
            if (this.empty(this.state.questions[i])) {
                this.buttonShake()
                return;
            }
            if (!this.state.questions[i].hasOwnProperty('question')
                || !this.state.questions[i].hasOwnProperty('answers')
                || !this.state.questions[i].hasOwnProperty('correct')
            ) {
                this.buttonShake()
                return;
            }
            if (this.state.questions[i].question === '') {
                this.buttonShake()
                return;
            }
            for (let j = 0; j < 4; j++) {
                if (this.state.questions[i].answers[j] === undefined
                    || this.state.questions[i].answers[j] === null
                    || this.state.questions[i].answers[j] === ''
                ) {
                    this.buttonShake()
                    return;
                }

            }
        }

        let newQuiz = {
            title: this.state.title,
            description: descHold,
            category: this.state.category,
            private: this.state.private
        }

        this.poster(newQuiz, this.state.questions)

    }

    componentDidUpdate() {
        let tempQuests = this.state.questions
        tempQuests.length = this.state.count
    }

    checker = () => {
        this.setState({
            private: !this.state.private
        })
    }

    render() {
        return (
            <div>
                <div className='createWrap'>
                    <div id='createHeader'>
                        <h1 className='cornerTitle' id='createCorner'>QUIZ BOWL</h1>
                        <div className='buttonWrap'>
                            <Link to={'/'} className='homeNavCreate yellowButton'>GO HOME</Link>
                        </div>
                    </div>
                    <form id='quizForm'>
                        <FormHead subAttempt={this.state.subAttempt}
                            category={this.state.category}
                            title={this.state.title}
                            checker={this.checker}
                            titleUpdate={this.titleUpdate}
                            descUpdate={this.descUpdate}
                            categoryUpdate={this.categoryUpdate}
                        />

                        <Question count={this.state.count} questChange={this.questChange}
                            ansChange={this.answerChange} corChange={this.correctChange}
                            bool={this.state.subAttempt} values={this.state.questions}
                        />

                        <Tail count={this.state.count}
                            subHandle={this.subHandle}
                            addQuestion={this.addQuestion}
                            delQuestion={this.delQuestion}
                        />
                    </form>
                </div>
                <Foot />
            </div>
        )
    }

}