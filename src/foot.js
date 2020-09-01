import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className='foot'>
                <span>made by </span>
                <a href='http://nassirjones.com' target='_blank'
                    rel='noopener noreferrer' className='webLink'>
                    Nassir Jones
                </a>
            </div>
        )
    }
}