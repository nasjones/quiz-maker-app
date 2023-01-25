import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import QuizCreate from "./quizCreate/quizCreate";
import ExistingQuiz from "./existingQuizzes/existing-quizzes";
import CreatePrompt from "./createPrompt/createPrompt";
import QuizDisplay from "./quizDisplay/quizDisplay";
import QuizLink from "./quizCreate/quizLink";
import ErrorPage from "./errorPage";
import NotFoundPage from "./notFound";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<main>
					<Routes>
						<Route exact path="/" index element={<Homepage />} />
						<Route path="createPrompt" element={<CreatePrompt />} />
						<Route path="/quizCreate" element={<QuizCreate />} />
						<Route path="/quizLink/:newId" element={<QuizLink />} />
						<Route path="/existing-quizzes" element={<ExistingQuiz />} />
						<Route path="/takeQuiz/:quizId" element={<QuizDisplay />} />
						<Route path="/error" element={<ErrorPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
			</div>
		);
	}
}

export default App;
