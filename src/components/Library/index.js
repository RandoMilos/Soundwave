import React, { useEffect, useState } from "react";
import Song from "../Songs";
import './styles.css';
import { eventEmitter } from "../../utils/eventEmitter";

const Library = () => {
    const [songList, setSongs] = useState([]);

    const loadLibrary = () => {
    const stored = JSON.parse(localStorage.getItem('librarySongs')) || [];
    setSongs(stored);
    };

    useEffect(() => {
    loadLibrary();

    const handleUpdate = () => {
        loadLibrary();
    };

    eventEmitter.on('libraryUpdated', handleUpdate);

    return () => {
        eventEmitter.off('libraryUpdated', handleUpdate);
    };
    }, []);

    return (
    <div>
        <h3>Tu Biblioteca:</h3>
        {songList.map(song => (
        <div className="libraryItem" key={song.id}>
            <Song songTitle={song.title} songArtist={song.artist} songLength={song.length} />
        </div>
        ))}
    </div>
    );
};

export default Library;