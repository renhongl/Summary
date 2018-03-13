

import React, { Component } from 'react';

import { Setting } from '../setting';

import './style.less';
// import PropTypes from 'prop-types';

export default class Background extends Component{
    constructor(props) {
        super(props);
        this.index = 1;
        this.state = {
            url: `/assets/image/background/${this.index}.jpg`,
            autoPlay: false,
            displaySize: 'cover'
        }
    }

    render() {
        const style = {
            background: `url(${this.state.url})`,
            backgroundSize: this.state.displaySize,
        };
        return (
            <section className='background' style={style}>
                <Setting />
            </section>
        )
    }
}

// Background.propTypes = {
//     url: PropTypes.string.isRequired,//background image url
//     autoPlay: PropTypes.bool.isRequired,//background enable carousel
//     displaySize: PropTypes.string.isRequired,//background size
// };

// Background.defaultProps = {
//     url: '',
//     autoPlay: false,
//     displaySize: 'contain'
// };