import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./quizCreate.css";
import Question from "./question";
import FormHead from "./re-used/formHead";
import Tail from "./re-used/formTail";
import config from "../config";
import Foot from "../foot";

export default function QuizCreate() {
	const [createState, setCreateState] = useState({
		subAttempt: false,
		count: 1,
		title: "",
		questions: [],
		description: "",
		private: false,
		category: "",
	});

	const navigate = useNavigate();

	const addQuestion = useCallback(
		(e) => {
			e.preventDefault();
			setCreateState({
				...createState,
				count: createState.count + 1,
				subAttempt: false,
			});
		},
		[createState]
	);

	const delQuestion = useCallback(
		(e) => {
			e.preventDefault();
			setCreateState({
				...createState,
				count: createState.count - 1,
			});
		},
		[createState]
	);

	const titleUpdate = useCallback(
		(title) => {
			setCreateState({
				...createState,
				title,
			});
		},
		[createState]
	);

	const categoryUpdate = useCallback(
		(category) => {
			setCreateState({
				...createState,
				category,
			});
		},
		[createState]
	);

	const questChange = useCallback(
		(i, question) => {
			if (question !== undefined)
				question = question.replace(/\s+/g, " ").trim();
			else question = "";
			let tempArr = createState.questions;
			if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("correct")
			) {
				let tempAns = tempArr[i].answers;
				let tempCorr = tempArr[i].correct;
				tempArr[i] = {
					question: question,
					answers: tempAns,
					correct: tempCorr,
				};
			} else if (
				tempArr[i] &&
				!tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("correct")
			) {
				let tempCorr = tempArr[i].correct;
				tempArr[i] = { question: question, correct: tempCorr };
			} else if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				!tempArr[i].hasOwnProperty("correct")
			) {
				let tempAns = tempArr[i].answers;
				tempArr[i] = { question: question, answers: tempAns };
			} else {
				tempArr[i] = { question: question };
			}
			setCreateState({
				...createState,
				questions: tempArr,
			});
		},
		[createState]
	);

	const answerChange = useCallback(
		(i, j, answer) => {
			let tempArr = createState.questions;
			if (answer !== undefined) answer = answer.replace(/\s+/g, " ").trim();
			else answer = "";
			if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("correct") &&
				tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = tempArr[i].answers;
				let questHold = tempArr[i].question;
				let corrHold = tempArr[i].correct;
				tempAns[j] = answer;
				tempArr[i] = {
					question: questHold,
					answers: tempAns,
					correct: corrHold,
				};
			} else if (
				tempArr[i] &&
				!tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("correct") &&
				tempArr[i].hasOwnProperty("question")
			) {
				let questHold = tempArr[i].question;
				let tempAns = [];
				let corrHold = tempArr[i].correct;
				tempAns[j] = answer;
				tempArr[i] = {
					question: questHold,
					answers: tempAns,
					correct: corrHold,
				};
			} else if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("correct") &&
				!tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = tempArr[i].answers;
				let corrHold = tempArr[i].correct;
				tempAns[j] = answer;
				tempArr[i] = { answers: tempAns, correct: corrHold };
			} else if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				!tempArr[i].hasOwnProperty("correct") &&
				tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = tempArr[i].answers;
				let questHold = tempArr[i].question;
				tempAns[j] = answer;
				tempArr[i] = { question: questHold, answers: tempAns };
			} else if (
				tempArr[i] &&
				!tempArr[i].hasOwnProperty("answers") &&
				!tempArr[i].hasOwnProperty("correct") &&
				tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = [];
				tempAns[j] = answer;
				let questHold = tempArr[i].question;
				tempAns[j] = answer;
				tempArr[i] = { question: questHold, answers: tempAns };
			} else if (
				tempArr[i] &&
				!tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("correct") &&
				!tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = [];
				tempAns[j] = answer;
				let tempCorr = tempArr[i].correct;
				tempArr[i] = { answers: tempAns, correct: tempCorr };
			} else if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				!tempArr[i].hasOwnProperty("correct") &&
				!tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = tempArr[i].answers;
				tempAns[j] = answer;
				tempArr[i] = { answers: tempAns };
			} else {
				let tempAns = [];
				tempAns[j] = answer;
				tempArr[i] = { answers: tempAns };
			}

			setCreateState({
				...createState,
				questions: tempArr,
			});
		},
		[createState]
	);

	const correctChange = useCallback(
		(i, ans) => {
			if (ans !== undefined) ans = ans.replace(/\s+/g, " ").trim();
			else ans = "";

			let tempArr = createState.questions;
			if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				tempArr[i].hasOwnProperty("question")
			) {
				let tempAns = tempArr[i].answers;
				let questHold = tempArr[i].question;
				tempArr[i] = {
					question: questHold,
					answers: tempAns,
					correct: ans,
				};
			} else if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("question") &&
				!tempArr[i].hasOwnProperty("answers")
			) {
				let questHold = tempArr[i].question;
				tempArr[i] = { question: questHold, correct: ans };
			} else if (
				tempArr[i] &&
				tempArr[i].hasOwnProperty("answers") &&
				!tempArr[i].hasOwnProperty("question")
			) {
				let ansHold = tempArr[i].answers;
				tempArr[i] = { answers: ansHold, correct: ans };
			} else {
				tempArr[i] = { correct: ans };
			}

			setCreateState({
				...createState,
				questions: tempArr,
			});
		},
		[createState]
	);

	const descUpdate = useCallback(
		(text) => {
			setCreateState({
				...createState,
				description: text,
			});
		},
		[createState]
	);

	const subtrue = useCallback(() => {
		setCreateState({
			...createState,
			subAttempt: true,
		});
	}, [createState]);

	const poster = useCallback(
		(quizInput, questInput) => {
			fetch(config.ENDPOINT + "/quiz", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${config.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(quizInput),
			})
				.then((res) => {
					if (!res.ok) return res.json().then((e) => Promise.reject(e));
					return res.json();
				})
				.then((quiz) => {
					for (let i = 0; i < questInput.length; i++) {
						let questObj = {
							quiz_id: quiz.unique_key,
							question: questInput[i].question,
							answers: questInput[i].answers,
							correct: questInput[i].correct,
						};
						fetch(config.ENDPOINT + "/questions", {
							method: "POST",
							headers: {
								"content-type": "application/json",
								Authorization: `Bearer ${config.REACT_APP_API_KEY}`,
							},
							body: JSON.stringify(questObj),
						})
							.then((res) => {
								if (!res.ok) return res.json().then((e) => Promise.reject(e));
								return res.json();
							})
							.then((questions) => {
								if (i === questInput.length - 1)
									navigate(`/quizLink/${quiz.unique_key}`);
							})
							.catch((errorTwo) => {
								console.error({ errorTwo });
								i = 100;
								navigate("/error");
							});
					}
				})
				.catch((errorOne) => {
					console.error({ errorOne });
				});
		},
		[navigate]
	);

	const empty = (data) => {
		if (typeof data == "number" || typeof data == "boolean") {
			return false;
		}
		if (typeof data == "undefined" || data === null) {
			return true;
		}
		if (typeof data.length != "undefined") {
			return data.length === 0;
		}
		let count = 0;
		for (let i in data) {
			if (data.hasOwnProperty(i)) {
				count++;
			}
		}
		return count === 0;
	};

	const buttonShake = () => {
		let butt = document.getElementById("quizSub");
		butt.classList.add("shaker");
		butt.addEventListener("animationend", (e) => {
			butt.classList.remove("shaker");
		});
		let err = document.getElementsByClassName("error");
		console.log(err[0]);
	};

	const subHandle = useCallback(
		(e) => {
			e.preventDefault();
			subtrue();

			if (
				createState.descLength > 300 ||
				createState.title === "" ||
				createState.category === ""
			) {
				buttonShake();
				return;
			}

			let descHold =
				createState.descLength > 0 ? createState.description : "None";

			for (let question of createState.questions) {
				if (empty(question)) {
					buttonShake();
					return;
				}
				if (
					!question.hasOwnProperty("question") ||
					!question.hasOwnProperty("answers") ||
					!question.hasOwnProperty("correct")
				) {
					buttonShake();
					return;
				}
				if (question.question === "") {
					buttonShake();
					return;
				}
				for (let j = 0; j < 4; j++) {
					if (
						question.answers[j] === undefined ||
						question.answers[j] === null ||
						question.answers[j] === ""
					) {
						buttonShake();
						return;
					}
				}
			}

			let newQuiz = {
				title: createState.title,
				description: descHold,
				category: createState.category,
				private: createState.private,
			};

			poster(newQuiz, createState.questions);
		},
		[createState, poster, subtrue]
	);

	const [didMount, setDidMount] = useState(false);
	useEffect(() => {
		if (didMount) {
			let tempQuests = createState.questions;
			tempQuests.length = createState.count;
		} else setDidMount(true);
	}, [createState, didMount]);

	const checker = useCallback(() => {
		setCreateState({
			...createState,
			private: !createState.private,
		});
	}, [createState]);

	return (
		<div>
			<div className="createWrap">
				<div id="createHeader">
					<h1 className="cornerTitle" id="createCorner">
						QUIZ BOWL
					</h1>
					<div className="buttonWrap">
						<Link to={"/"} className="homeNavCreate yellowButton">
							GO HOME
						</Link>
					</div>
				</div>
				<form id="quizForm">
					<FormHead
						subAttempt={createState.subAttempt}
						category={createState.category}
						title={createState.title}
						checker={checker}
						titleUpdate={titleUpdate}
						descUpdate={descUpdate}
						categoryUpdate={categoryUpdate}
					/>

					<Question
						count={createState.count}
						questChange={questChange}
						ansChange={answerChange}
						corChange={correctChange}
						bool={createState.subAttempt}
						values={createState.questions}
					/>

					<Tail
						count={createState.count}
						subHandle={subHandle}
						addQuestion={addQuestion}
						delQuestion={delQuestion}
					/>
				</form>
			</div>
			<Foot />
		</div>
	);
}
