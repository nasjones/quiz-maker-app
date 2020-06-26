import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage'
import QuizContext from './QuizContext'
import quizCreate from './quizCreate/quizCreate'
import existingQuizzes from './existingQuizzes/existing-quizzes'
import createPrompt from './createPrompt/createPrompt'
import quizDisplay from './quizDisplay/quizDisplay'
import config from './config'
import './App.css';

class App extends Component {

  state = {
    quiz: [],
    loaded: false
  }

  fetcher = () => {
    fetch(config.ENDPOINT + '/quiz', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.REACT_APP_API_KEY}`
      }
    }).then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    }).then(quiz => {
      this.setState({
        quiz,
        loaded: true
      })
    }).catch(error => {
      console.error({ error })
    })
  }

  UNSAFE_componentWillMount() {
    this.fetcher()
  }

  render() {
    const contextVal = {
      quiz: this.state.quiz,
      pageUpdate: this.fetcher,
      loaded: this.state.loaded
    }
    return (
      <div className="App">
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
