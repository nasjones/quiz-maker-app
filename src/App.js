import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import quizCreate from './quizCreate/quizCreate';
import existingQuizzes from './existingQuizzes/existing-quizzes';
import createPrompt from './createPrompt/createPrompt';
import quizDisplay from './quizDisplay/quizDisplay';
import quizLink from './quizCreate/quizLink';
import signup from './userEnter/signup';
import login from './userEnter/login'
import errorPage from './errorPage';
import notFoundPage from './notFound';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/signup' component={signup} />
            <Route path='/login' component={login} />
            <Route path='/createPrompt' component={createPrompt} />
            <Route path='/quizCreate' component={quizCreate} />
            <Route path='/quizLink/:newId' component={quizLink} />
            <Route path='/existing-quizzes' component={existingQuizzes} />
            <Route path='/takeQuiz/:quizId' component={quizDisplay} />
            <Route path='/error' component={errorPage} />
            <Route component={notFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
