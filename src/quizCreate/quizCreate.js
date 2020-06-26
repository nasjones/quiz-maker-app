import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './quizCreate.css';
import Question from './question';
import ValidationError from './ValidationError';
import QuizLink from './quizLink';
import config from '../config';

export default class quizCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subAttempt: false,
            count: 1,
            title: "",
            titleTouch: false,
            questions: [],
            description: "",
            descLength: 0,
            private: false,
            catTouch: false,
            category: "",
            submitted: false,
            link: null,
            error: null
        }
    }

    addQuestion = (e) => {
        e.preventDefault()
        if (this.state.count < 20)
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

    titleChange = (titleUpdate) => {

        this.setState({
            title: titleUpdate.replace(/\s+/g, ' ').trim(),
            titleTouch: true
        })
    }

    categoryChange = (category) => {
        this.setState({
            catTouch: true,
            category
        })
    }

    titleCheck() {
        if ((this.state.titleTouch || this.state.subAttempt) && this.state.title.length === 0)
            return true;
        return false;
    }

    categoryCheck() {
        if ((this.state.catTouch || this.state.subAttempt) && this.state.category === "")
            return true;
        return false;
    }

    questChange = (i, question) => {
        let tempArr = this.state.questions
        if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('correct')) {
            let tempAns = tempArr[i].answers
            let tempCorr = tempArr[i].correct
            tempArr[i] = { question: question, answers: tempAns, correct: tempCorr }
        }
        else if (tempArr[i] && !tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('correct')) {
            let tempCorr = tempArr[i].correct
            tempArr[i] = { question: question, correct: tempCorr }
        }
        else if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && !tempArr[i].hasOwnProperty('correct')) {
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
            answer = ""
        if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('correct') && tempArr[i].hasOwnProperty('question')) {
            let tempAns = tempArr[i].answers
            let questHold = tempArr[i].question
            let corrHold = tempArr[i].correct
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns, correct: corrHold }
        }
        else if (tempArr[i] && !tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('correct') && tempArr[i].hasOwnProperty('question')) {
            let questHold = tempArr[i].question
            let tempAns = []
            let corrHold = tempArr[i].correct
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns, correct: corrHold }
        }
        else if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('correct') && !tempArr[i].hasOwnProperty('question')) {
            let tempAns = tempArr[i].answers
            let corrHold = tempArr[i].correct
            tempAns[j] = answer
            tempArr[i] = { answers: tempAns, correct: corrHold }
        }
        else if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && !tempArr[i].hasOwnProperty('correct') && tempArr[i].hasOwnProperty('question')) {
            let tempAns = tempArr[i].answers
            let questHold = tempArr[i].question
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns }
        }
        else if (tempArr[i] && !tempArr[i].hasOwnProperty('answers') && !tempArr[i].hasOwnProperty('correct') && tempArr[i].hasOwnProperty('question')) {
            let tempAns = []
            tempAns[j] = answer
            let questHold = tempArr[i].question
            tempAns[j] = answer
            tempArr[i] = { question: questHold, answers: tempAns }
        }
        else if (tempArr[i] && !tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('correct') && !tempArr[i].hasOwnProperty('question')) {
            let tempAns = []
            tempAns[j] = answer
            let tempCorr = tempArr[i].correct
            tempArr[i] = { answers: tempAns, correct: tempCorr }
        }
        else if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && !tempArr[i].hasOwnProperty('correct') && !tempArr[i].hasOwnProperty('question')) {
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
        let tempArr = this.state.questions
        if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && tempArr[i].hasOwnProperty('question')) {
            let tempAns = tempArr[i].answers
            let questHold = tempArr[i].question
            tempArr[i] = { question: questHold, answers: tempAns, correct: ans }
        }
        else if (tempArr[i] && tempArr[i].hasOwnProperty('question') && !tempArr[i].hasOwnProperty('answers')) {
            let questHold = tempArr[i].question
            tempArr[i] = { question: questHold, correct: ans }
        }
        else if (tempArr[i] && tempArr[i].hasOwnProperty('answers') && !tempArr[i].hasOwnProperty('question')) {
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

    descChange = (text) => {
        let input = text.replace(/\s+/g, ' ').trim()
        this.setState({
            description: input,
            descLength: input.length
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
                        this.setState({
                            submitted: true,
                            link: "/takeQuiz/" + quiz.unique_key
                        })
                }).catch(errorTwo => {
                    console.error({ errorTwo })
                    this.setState({ error: true })
                    i = 100
                })
                // value.pageUpdate()
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
        let butt = document.getElementById("quizSub")
        butt.classList.add("shaker")
        butt.addEventListener("animationend", (e) => {
            butt.classList.remove("shaker");
        });
    }

    subHandle = (e) => {
        e.preventDefault()
        this.subtrue()

        if (this.state.descLength > 300 || this.state.title === "") {
            this.buttonShake()
            return;
        }

        let descHold = this.state.description

        for (let i = 0; i < this.state.questions.length; i++) {
            if (this.empty(this.state.questions[i])) {
                this.buttonShake()
                return;
            }
            if (!this.state.questions[i].hasOwnProperty("question") || !this.state.questions[i].hasOwnProperty("answers") || !this.state.questions[i].hasOwnProperty("correct")) {
                this.buttonShake()
                return;
            }
            if (this.state.questions[i].question === "") {
                this.buttonShake()
                return;
            }
            for (let j = 0; j < 4; j++) {
                if (this.state.questions[i].answers[j] === undefined || this.state.questions[i].answers[j] === null || this.state.questions[i].answers[j] === "") {
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

    checkChange() {
        this.setState({
            private: !this.state.private
        })
    }

    render() {
        const titleVal = this.titleCheck()
        const catVal = this.categoryCheck()
        let descCount
        if (this.state.descLength <= 300)
            descCount = <span id="maxMsg">{this.state.descLength}/300 characters</span>
        else
            descCount = <span id="maxMsg" className="error">{this.state.descLength}/300 characters</span>

        let categories = ['Animal',
            'Art',
            'Food',
            'Geography',
            'History',
            'Literature',
            'Movie/Tv',
            'Music',
            'Personal',
            'Political',
            'Random',
            'Science',
            'Sports',
            'Video-Games']

        let catDrop = categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)
        let formHead =
            <div>
                <h3>Name your quiz*:</h3>
                <input type="text" className="question" onChange={e => this.titleChange(e.target.value)} />
                {titleVal && <ValidationError message={"Please enter a title"} />}
                <h3>Describe your quiz: </h3>
                <textarea id="description" onChange={e => this.descChange(e.target.value)} defaultValue={this.state.description} />
                <br />
                {descCount}
                <h3>Category:</h3>
                <select name="categories" id="categories" onChange={e => this.categoryChange(e.target.value)}>
                    <option value="">Choose a category</option>
                    {catDrop}
                </select>
                {catVal && <ValidationError message={"Please choose a category"} />}
                <br />
                <br />
                {/* <span>output:</span>
                <p>{this.state.description}</p> */}
                <input type="checkbox" id="private" name="private" onChange={e => this.checkChange()} />
                <label htmlFor="private" id="privateLabel">Make quiz private?</label>
            </div>

        let formTail =
            <div>
                <br />
                <div className="questionFormButtons">
                    <button type="submit" id="quizSub" className="greenButton" onClick={e => this.subHandle(e)}>SUBMIT THIS QUIZ NOW</button>
                </div>
            </div>

        let homeButton =
            <div className="buttonWrap">
                <Link to={'/'} className="homeNavCreate yellowButton">GO HOME</Link>
            </div>

        let question = <Question count={this.state.count} questChange={this.questChange} ansChange={this.answerChange} corChange={this.correctChange} bool={this.state.subAttempt} values={this.state.questions} />

        let foot =
            <div className="foot">made by <a href="http://nassirjones.com" target="_blank" rel="noopener noreferrer" className="webLink">Nassir Jones</a>
            </div>

        if (this.state.error === true) return (
            <div>
                <h1 className="error">Sorry there was an error with this request. Maybe try again later or try something else.</h1>
                <a href="/">Return home</a>
            </div>
        )


        if (this.state.submitted)
            return (
                <QuizLink link={this.state.link} />
            )

        else if (this.state.count === 20) {
            return (
                <div>
                    <div className="createWrap">
                        <div id="createHeader">
                            <h1 className="cornerTitle" id="createCorner">QUIZ BOWL</h1>
                            {homeButton}
                        </div>
                        <form id="quizForm">
                            {formHead}
                            {question}
                            <div className="questionFormButtons">
                                <button onClick={e => this.delQuestion(e)} id="remQuest" className="redButton">DELETE LAST QUESTION</button>
                            </div>
                            <br />

                            {formTail}
                        </form>

                    </div>
                    {foot}
                </div>
            )
        }
        else if (this.state.count > 1) {
            return (
                <div>
                    <div className="createWrap">
                        <div id="createHeader">
                            <h1 className="cornerTitle" id="createCorner">QUIZ BOWL</h1>
                            {homeButton}
                        </div>
                        <form id="quizForm">
                            {formHead}
                            {question}
                            <div className="questionFormButtons">
                                <button id="addQuest" onClick={e => this.addQuestion(e)} className="yellowButtonTwo">ANOTHER QUESTION</button>
                                <button onClick={e => this.delQuestion(e)} id="remQuest" className="redButton">DELETE LAST QUESTION</button>
                            </div>
                            <br />
                            {formTail}
                        </form>

                    </div>
                    {foot}
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="createWrap">
                        <div id="createHeader">
                            <h1 className="cornerTitle" id="createCorner">QUIZ BOWL</h1>
                            {homeButton}
                        </div>
                        <form id="quizForm">
                            {formHead}
                            {question}
                            <div className="questionFormButtons">
                                <button id="addQuest" onClick={e => this.addQuestion(e)} className="yellowButtonTwo">ANOTHER QUESTION</button>
                            </div>
                            <br />
                            {formTail}
                        </form>


                    </div>
                    {foot}
                </div>
            )
        }
    }
}