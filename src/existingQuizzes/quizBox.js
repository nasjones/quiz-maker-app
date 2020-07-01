import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../downward-arrow.png'
import './quizBox.css';


export default class QuizBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.index
        }
    }

    hoverIn = (e) => {
        e.currentTarget.children[1].checked = true;
        this.props.radChange(e.currentTarget.children[1]);
    }

    hoverOut = (e) => {
        e.currentTarget.children[1].checked = false;
        this.props.radChange(null)
    }

    render() {

        let box
        if (this.props.index % 2 === 0)
            box = 'yellowBox'
        else
            box = 'redBox'

        let revImageLabel = <label htmlFor={`infoDisplay${this.props.index}`} className='arrowLabeler'><img src={arrow} className='imgArrow' id='upsideDown' alt='arrowImage' /></label>
        let imageLabel = <label htmlFor={`infoDisplay${this.props.index}`} className='arrowLabeler'><img src={arrow} className='imgArrow' alt='arrowImage' /></label>
        if (window.innerWidth > 900) {
            if (this.props.checked)
                return (
                    <div className={`quizWrap ${box}`} id='displayed' onMouseLeave={e => this.hoverOut(e)}>
                        {revImageLabel}
                        <input type='checkbox' checked={this.props.checked} className='infoDisplay' id={`infoDisplay${this.props.index}`} value={this.state.index} onChange={e => this.props.radChange(e.target)} />
                        <div className='qBoxLink'>
                            <Link to={`/takeQuiz/${this.props.id}`} >
                                <h2>{this.props.title}</h2>
                                <h3>Category: {this.props.category}</h3>
                                <p className="desc">{this.props.desc}</p>
                            </Link>
                        </div>
                    </div>
                )
            else
                return (
                    <div className={`quizWrap ${box}`} onMouseOver={e => this.hoverIn(e)}>
                        {imageLabel}
                        <input type='checkbox' checked={this.props.checked} className='infoDisplay' id={`infoDisplay${this.props.index}`} value={this.state.index} onChange={e => this.props.radChange(e.target)} />
                        <div className='qBoxLink'>
                            <Link to={`/takeQuiz/${this.props.id}`} >
                                <h2>{this.props.title}</h2>
                                <h3>Category: {this.props.category}</h3>
                            </Link>
                        </div>
                    </div>
                )
        }
        else {
            if (this.props.checked)
                return (
                    <div className={`quizWrap ${box}`} id='displayed' >
                        {revImageLabel}
                        <input type='checkbox' checked={this.props.checked} className='infoDisplay' id={`infoDisplay${this.props.index}`} value={this.state.index} onChange={e => this.props.radChange(e.target)} />
                        <div className='qBoxLink'>
                            <Link to={`/takeQuiz/${this.props.id}`} >
                                <h2>{this.props.title}</h2>
                                <h3>Category: {this.props.category}</h3>
                                <p className="desc">{this.props.desc}</p>
                            </Link>
                        </div>
                    </div>
                )
            else
                return (
                    <div className={`quizWrap ${box}`} >
                        {imageLabel}
                        <input type='checkbox' checked={this.props.checked} className='infoDisplay' id={`infoDisplay${this.props.index}`} value={this.state.index} onChange={e => this.props.radChange(e.target)} />
                        <div className='qBoxLink'>
                            <Link to={`/takeQuiz/${this.props.id}`} >
                                <h2>{this.props.title}</h2>
                                <h3>Category: {this.props.category}</h3>
                            </Link>
                        </div>
                    </div>
                )
        }
    }
}
