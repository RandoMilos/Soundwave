import React, { Component } from 'react';
import { moreHorizontal } from '../../images';

class Song extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log('Component song has been mounted');
    }
    render(){
        return(
            <div className='songListGrid__item'>
                <p>{this.props.songNumber}</p>
                <div>
                    <p className='songTitle'>{this.props.songTitle}</p>
                    <p className='songArtist'>{this.props.songArtist}</p>
                </div>
                <p>{this.props.songLength}</p>
                <button><img className='moreButton' src={moreHorizontal}></img></button>
            </div>
        );
    }
}

export default Song;
