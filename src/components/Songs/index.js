import React from 'react';
import { moreHorizontal } from '../../images';
import './styles.css'

const Song = ( {songID, songTitle, songArtist, songLength} ) => {
    return(
        <div className='songListGrid__item'>
            <p>{songID}</p>
            <div>
                <p className='songTitle'>{songTitle}</p>
                <p className='songArtist'>{songArtist}</p>
            </div>
            <p>{songLength}</p>
            <button className='songOptButton'><img className='moreButton' src={moreHorizontal}></img></button>
        </div>
    )
}

export default Song;
