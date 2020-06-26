import React, { Component } from 'react';
import QuizBox from './quizBox';
import QuizContext from '../QuizContext';
import { Link } from 'react-router-dom';
import './existing-quizzes.css';

// import './question.css';


export default class existingQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            category: "All"
        }
    }

    search = (quiz) => {
        if (quiz.title.indexOf(this.state.search) !== -1 || quiz.description.indexOf(this.state.search) !== -1)
            return true;
        return false
    }

    categoryFilter = (quiz) => {
        if (this.state.category === "All")
            return true;
        else if (quiz.category === this.state.category)
            return true;
        return false;
    }

    categoryChange = (category) => {
        this.setState({
            category
        })
    }

    render() {
        return (
            <QuizContext.Consumer>
                {(value) => {
                    const category = value.quiz.filter(quiz => {
                        return this.categoryFilter(quiz)
                    })
                    const searched = category.filter(quiz => {
                        return this.search(quiz)
                    })
                    const listed = searched.map((quiz, index) => {
                        return (
                            <QuizBox key={quiz.unique_key} id={quiz.unique_key} title={quiz.title} desc={quiz.description} category={quiz.category} type={index % 2} />
                        )
                    })

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

                    let query = <div id="queryBox">
                        <input type="text" placeholder="Search" id="searchBar" onChange={e => this.setState({
                            search: e.target.value
                        })} />
                        <select name="categories" id="categories" onChange={e => this.categoryChange(e.target.value)}>
                            <option value="All">All</option>
                            {catDrop}
                        </select>
                    </div>

                    if (listed.length === 0)
                        return (
                            <div className="quizPage">
                                <div id="existHead">
                                    <h1 className="cornerTitle" id="existCorner">QUIZ BOWL</h1>
                                    <div className="buttonWrap">
                                        <Link to={'/'} className="homeNavExist yellowButton">GO HOME</Link>
                                    </div>
                                </div>
                                {query}
                                <div id="quizStage">
                                    <h2>Sorry no quizzes matched your query.</h2>
                                </div>
                                <div className="foot" >made by <a href="http://nassirjones.com" target="_blank" rel="noopener noreferrer" className="webLink">Nassir Jones</a>
                                </div>
                            </div>
                        )
                    else
                        return (
                            <div className="quizPage">
                                <div id="existHead">
                                    <h1 className="cornerTitle" id="existCorner">QUIZ BOWL</h1>
                                    <div className="buttonWrap">
                                        <Link to={'/'} className="homeNavExist yellowButton">GO HOME</Link>
                                    </div>
                                </div>
                                {query}
                                <div id="quizStage">
                                    {listed}
                                </div>
                                <div className="foot" >made by <a href="http://nassirjones.com" target="_blank" rel="noopener noreferrer" className="webLink">Nassir Jones</a>
                                </div>
                            </div>
                        )

                }}
            </QuizContext.Consumer>
        )
    }
}
