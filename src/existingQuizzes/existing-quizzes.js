import React, { Component } from "react";
import QuizBox from "./quizBox";
import config from "../config";
import { Link, Navigate } from "react-router-dom";
import Foot from "../foot";
import he from "he";
import "./existing-quizzes.css";

export default class ExistingQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			category: "All",
			loaded: false,
			quiz: null,
			selected: null,
			route: "",
		};
	}

	search = (quiz) => {
		return !!(
			quiz.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
				-1 ||
			quiz.description
				.toLowerCase()
				.indexOf(this.state.search.toLowerCase()) !== -1
		);
	};

	categoryFilter = (quiz) => {
		return !!(
			this.state.category === "All" || quiz.category === this.state.category
		);
	};

	categoryChange = (category) => {
		this.setState({
			category,
			selected: null,
		});
	};

	searchChange = (search) => {
		this.setState({
			search: search,
			selected: null,
		});
	};

	fetcher = () => {
		fetch(config.ENDPOINT + "/quiz", {
			method: "GET",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${config.REACT_APP_API_KEY}`,
			},
		})
			.then((res) => {
				if (!res.ok) return res.json().then((e) => Promise.reject(e));
				return res.json();
			})
			.then((quiz) => {
				this.setState({
					quiz,
					loaded: true,
				});
			})
			.catch((error) => {
				console.error({ error });
				this.setState({
					route: "/error",
				});
			});
	};

	UNSAFE_componentWillMount() {
		this.fetcher();
	}

	radChange = (radio) => {
		if (radio)
			if (radio.checked) {
				let value = parseInt(radio.value);
				this.setState({
					selected: value,
				});
			} else {
				this.setState({
					selected: null,
				});
			}
		else
			this.setState({
				selected: null,
			});
	};

	render() {
		if (!this.state.loaded) return <h1 className="loading">Loading..</h1>;
		const category = this.state.quiz.filter((quiz) => {
			return this.categoryFilter(quiz);
		});
		const searched = category.filter((quiz) => {
			return this.search(quiz);
		});
		const listed = searched.map((quiz, index) => {
			return (
				<QuizBox
					key={quiz.unique_key}
					id={quiz.unique_key}
					title={he.decode(quiz.title)}
					desc={he.decode(quiz.description)}
					category={quiz.category}
					index={index}
					checked={this.state.selected === index}
					radChange={this.radChange}
				/>
			);
		});

		let categories = [
			"Animal",
			"Art",
			"Food",
			"Geography",
			"History",
			"Literature",
			"Movie/Tv",
			"Music",
			"Personal",
			"Political",
			"Random",
			"Science",
			"Sports",
			"Video-Games",
		];

		let catDrop = categories.map((cat, index) => (
			<option key={index} value={cat}>
				{cat}
			</option>
		));

		let query = (
			<div id="queryBox">
				<input
					type="text"
					placeholder="Search"
					id="searchBar"
					onChange={(e) => this.searchChange(e.target.value)}
				/>
				<select
					name="categories"
					id="categories"
					onChange={(e) => this.categoryChange(e.target.value)}
				>
					<option value="All">All</option>
					{catDrop}
				</select>
			</div>
		);

		if (listed.length === 0)
			return (
				<div className="quizPage">
					<div id="existHead">
						<h1 className="cornerTitle" id="existCorner">
							QUIZ BOWL
						</h1>
						<div className="buttonWrap">
							<Link to={"/"} className="homeNavExist yellowButton">
								GO HOME
							</Link>
						</div>
					</div>
					{query}
					<div id="quizStage">
						<h2>Sorry no quizzes matched your query.</h2>
					</div>
					<Foot />
				</div>
			);
		else if (this.state.route !== "")
			return <Navigate to={this.state.route} replace />;
		else
			return (
				<div className="quizPage">
					<div id="existHead">
						<h1 className="cornerTitle" id="existCorner">
							QUIZ BOWL
						</h1>
						<div className="buttonWrap">
							<Link to={"/"} className="homeNavExist yellowButton">
								GO HOME
							</Link>
						</div>
					</div>
					{query}
					<div id="quizStage">{listed}</div>
					<Foot />
				</div>
			);
	}
}
