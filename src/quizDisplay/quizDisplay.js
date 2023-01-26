import React, { useEffect, useState } from "react";
import Quiz from "./quiz";
import "./quizDisplay.css";
import config from "../config";
import { Link, useParams } from "react-router-dom";
import Foot from "../foot";
import he from "he";

export default function QuizDisplay() {
	const [displayState, setDisplayState] = useState({
		quiz: null,
		loaded: false,
		questions: [],
	});
	let { quizId } = useParams();

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${config.REACT_APP_API_KEY}`,
			},
		};
		Promise.all([
			fetch(config.ENDPOINT + "/quiz/key/" + quizId, options),
			fetch(config.ENDPOINT + "/questions/quiz/" + quizId, options),
		])
			.then(([quizRes, questRes]) => {
				if (!quizRes.ok) return quizRes.json().then((e) => Promise.reject(e));
				if (!questRes.ok) return questRes.json().then((e) => Promise.reject(e));
				return Promise.all([quizRes.json(), questRes.json()]);
			})
			.then(([quiz, questOut]) => {
				for (const element of questOut)
					element.answers = shuffle(element.answers);

				setDisplayState({
					quiz,
					questions: questOut,
					loaded: true,
				});
			})
			.catch((e) => {
				console.error(e);
				setDisplayState({
					error: true,
				});
			});
	}, [quizId]);

	const shuffle = (array) => {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

	if (displayState.error)
		return (
			<div className="quizPage">
				<h1 className="landingTitle">QUIZ BOWL</h1>
				<h2 className="error">
					Sorry there was a problem processing your request try again later or
					try a different quiz.
				</h2>
				<div className="buttonWrap">
					<Link to={"/existing-quizzes"} className="homeNavExist yellowButton">
						GO BACK
					</Link>
				</div>
				<Foot />
			</div>
		);
	else if (displayState.loaded)
		return (
			<div className="quizPage">
				<div id="existHead">
					<h1 className="cornerTitle" id="existCorner">
						QUIZ BOWL
					</h1>
					<div className="buttonWrap">
						<Link
							to={"/existing-quizzes"}
							className="homeNavExist yellowButton"
						>
							GO BACK
						</Link>
					</div>
				</div>
				<Quiz
					title={he.decode(displayState.quiz.title)}
					questions={displayState.questions}
					description={he.decode(displayState.quiz.description)}
				/>
			</div>
		);
	else return <h1 className="landingTitle">Loading...</h1>;
}
