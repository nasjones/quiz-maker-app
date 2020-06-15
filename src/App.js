import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Homepage from './Homepage'
import QuizContext from './QuizContext'
import quizCreate from './quizCreate/quizCreate'
import existingQuizzes from './existingQuizzes/existing-quizzes'
import createPrompt from './createPrompt/createPrompt'
import quizDisplay from './quizDisplay/quizDisplay'
import quizStore from './quizStore'
import answerStore from './answerStore'
import questionStore from './questionStore'
import './App.css';

class App extends Component {

  state = {
    quiz: []
  }
  UNSAFE_componentWillMount() {
    window.globe = { quizStore, answerStore, questionStore }
    fetch('http://localhost:8000/api/quiz', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).then(quiz => {
      this.setState({
        quiz
      })
      console.log(quiz)
    }).catch(error => {
      console.error({ error })
    })
  }

  // circularText = (txt, radius, name) => {
  //   txt = txt.split("")
  //   name = document.getElementById(name)
  //   console.log(txt.length)
  //   let deg = 360 / txt.length,
  //     origin = 0;

  //   txt.forEach((ea) => {
  //     ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
  //     name.innerHTML += ea;
  //     origin += deg;
  //   });
  // }



  render() {
    const contextVal = {
      quiz: this.state.quiz
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">
            <Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="155px" height="90px">
                <path id="upPath" d="M -72 100 C -72 0, 225 0, 225 100" fill="none" />
                <text textAnchor="middle">
                  <textPath href="#upPath" startOffset="50%">
                    Quiz Bowl
                  </textPath>
                </text>
                <path id="downPath" d="M -72 100 C -72 200, 225 200, 225 100" fill="none" />
                <text textAnchor="middle">
                  <textPath href="#downPath" startOffset="50%">
                    Quiz Bowl
                  </textPath>
                </text>
              </svg>
            </Link>
          </h1>
        </header>
        <QuizContext.Provider value={contextVal}>
          <main>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/createPrompt' component={createPrompt} />
              <Route path='/quizCreate' component={quizCreate} />
              <Route path='/existing-quizzes' component={existingQuizzes} />
              <Route path='/takeQuiz/:quizId' component={quizDisplay} />
            </Switch>
          </main>
        </QuizContext.Provider>
      </div>
    );
  }
}

export default App;
