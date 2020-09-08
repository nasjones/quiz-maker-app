import React, { Component } from 'react';
import ValidationError from './ValidationError';

const categories = ['Animal',
    'Art',
    'Food',
    'Geography',
    'History',
    'Literature',
    'Movie/Tv',
    'Music',
    'Personal',
    'Political',
    'Random',
    'Science',
    'Sports',
    'Video-Games']

export default class FormHead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descLength: 0,
            titleTouch: false,
            categoryTouch: false

        }
    }

    titleCheck() {
        if ((this.state.titleTouch
            || this.props.subAttempt)
            && this.props.title.length === 0)
            return true;
        return false;
    }

    titleChange(title) {
        this.setState({
            titleTouch: true
        })

        title = title.replace(/\s+/g, ' ').trim()
        this.props.titleUpdate(title)
    }

    descChange(desc) {
        let input = desc.replace(/\s+/g, ' ').trim()
        this.setState({
            // description: text,
            descLength: input.length
        })
        this.props.descUpdate(input)
    }

    categoryCheck() {
        if ((this.state.categoryTouch
            || this.props.subAttempt)
            && this.props.category === '')
            return true;
        return false;
    }

    categoryChange(category) {
        this.setState({
            categoryTouch: true
        })
        this.props.categoryUpdate(category)
    }

    render() {
        let catDrop = categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)
        return (
            <div>
                <h3>Name your quiz:</h3>
                <input type='text' className='question'
                    onChange={e => this.titleChange(e.target.value)}
                />
                {this.titleCheck() && <ValidationError message={'Please enter a valid title'} />}
                <h3>Describe your quiz: </h3>
                <textarea id='description'
                    onChange={e => this.descChange(e.target.value)}
                    defaultValue={this.state.description}
                />
                <br />
                <span id='maxMsg' className={`${this.state.descLength > 300 && 'error'}`}>{this.state.descLength}/300 characters</span>
                <h3>Category:</h3>
                <select name='categories' id='categories'
                    onChange={e => this.categoryChange(e.target.value)}
                >
                    <option value=''>Choose a category</option>
                    {catDrop}
                </select>
                {this.categoryCheck() && <ValidationError message={'Please choose a category'} />}
                <br />
                <br />
                <input type='checkbox' id='private' name='private' onChange={() => this.props.checker()} />
                <label htmlFor='private' id='privateLabel'>Make quiz private?</label>
            </div>
        )
    }
}