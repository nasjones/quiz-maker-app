import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import config from './config';
import './Homepage.css';


export default class Homepage extends Component {

    // fetcher = () => {
    //     console.log("fetching")
    //     fetch(config.ENDPOINT + '/quiz', {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${config.REACT_APP_API_KEY}`
    //         }
    //     }).then(res => {
    //         if (!res.ok)
    //             return res.json().then(e => Promise.reject(e))
    //         return res.json()
    //     }).then(quiz => {
    //         this.setState({
    //             quiz,
    //             loaded: true
    //         })
    //     }).catch(error => {
    //         console.error({ error })
    //     })
    // }
    // componentDidMount() {
    // this.fetcher()
    // }
    render() {
        return (
            <div id="homepage">
                <h1 className="landingTitle">QUIZ BOWL</h1>
                <div className="buttonWrap">
                    <Link to={'/createPrompt'} className="homeNav greenButton" >CREATE YOUR OWN QUIZ</Link>
                    <br />
                    <Link to={'/existing-quizzes'} className="homeNav yellowButton">EXPLORE OUR QUIZZES</Link>
                </div>
                <div className="foot">made by <a href="http://nassirjones.com" target="_blank" rel="noopener noreferrer" className="webLink">Nassir Jones</a></div>
            </div>
        )
    }
}