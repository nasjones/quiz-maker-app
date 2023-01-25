import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import quizCreate from "./quizCreate/quizCreate";
import existingQuizzes from "./existingQuizzes/existing-quizzes";
import createPrompt from "./createPrompt/createPrompt";
import quizDisplay from "./quizDisplay/quizDisplay";
import quizLink from "./quizCreate/quizLink";
// import Signup from "./userEnter/signup";
// import Login from "./userEnter/login";
import errorPage from "./errorPage";
import notFoundPage from "./notFound";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<main>
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						{/* <Route path="/signup" element={<Signup />} /> */}
						{/* <Route path="/login" element={<Login />} /> */}
						<Route path="/createPrompt" element={<createPrompt />} />
						<Route path="/quizCreate" element={<quizCreate />} />
						<Route path="/quizLink/:newId" element={<quizLink />} />
						<Route path="/existing-quizzes" element={<existingQuizzes />} />
						<Route path="/takeQuiz/:quizId" element={<quizDisplay />} />
						<Route path="/error" element={<errorPage />} />
						<Route path="*" element={<notFoundPage />} />
					</Routes>
				</main>
			</div>
		);
	}
}

export default App;
