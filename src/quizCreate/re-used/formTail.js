import React, { Component } from 'react';

export default class Tail extends Component {
    render() {
        return (
            <div>
                <div className='questionFormButtons'>

                    {this.props.count < 20 ? (<button id='addQuest' className='yellowButtonTwo'
                        onClick={e => this.props.addQuestion(e)}>
                        ANOTHER QUESTION
                    </button>) : null}
                    {this.props.count > 1 ? (<button id='remQuest' className='redButton'
                        onClick={e => this.props.delQuestion(e)}>
                        DELETE LAST QUESTION
                    </button>) : null}
                </div>
                <br />
                <br />
                <div className='questionFormButtons'>
                    <button type='submit' id='quizSub' className='greenButton' onClick={e => this.props.subHandle(e)}>SUBMIT THIS QUIZ NOW</button>
                </div>
            </div>
        )
    }
}