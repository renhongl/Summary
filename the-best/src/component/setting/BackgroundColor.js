

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { lang } from '../../share/config/lang';
import { Switch } from 'antd';

export default class BackgroundColor extends Component{
    constructor(props){
        super(props);
        this.state = {
            showList: false
        }
    }

    toggleList = () => {
        this.setState({
            showList: !this.state.showList
        });
    }

    render() {
        const { config, changeBgColor, changeBgOpacity, changeFontColor, toggleBgPicture } = this.props;
        const { fontColor, opacity, language, backgroundColor, showBackgroundPicture} = config;
        const style = {
            color: fontColor
        }
        const btnStye = {
            'backgroundColor': `rgba(${backgroundColor},${opacity})`
        }
        return (
            <section className='background-color common-setting'>
                <h4 onClick={this.toggleList} style={style}>{lang[language]['BACKGROUND-COLOR-SETTING']}</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    <li><span className='key'>{lang[language]['SHOW-BACKGROUND-IMAGE']}:</span> 
                        <Switch 
                            onChange={toggleBgPicture} 
                            style={showBackgroundPicture ? btnStye : {} }
                            defaultChecked={showBackgroundPicture ? true : false} 
                        />
                    </li>
                    <li><span className='key'>{lang[language]['BACKGROUND-COLOR']}: </span><input type='color' onChange={changeBgColor}/></li>
                    <li><span className='key'>{lang[language]['BACKGROUND-FONT-COLOR']}: </span><input type='color' onChange={changeFontColor}/></li>
                    <li><span className='key'>{lang[language]['BACKGROUND-OPACITY']}: </span><input className='opacity' type="number" min="0" max="10" value={opacity * 10} onChange={changeBgOpacity}/></li>
                </ul>
            </section>
        )
    }
}

BackgroundColor.propTypes = {
}

BackgroundColor.defaultProps = {
}