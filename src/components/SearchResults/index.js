import React, { useState, useEffect } from "react";
import Song from "../Songs";
import { addTo } from '../../images';
import './styles.css';
import { eventEmitter } from "../../utils/eventEmitter";

const SearchResults = () => {
    const [searchList, setSongs] = useState([]);

    useEffect(() => {
    const fecthSongList = async () => {
        const res = [
        { id: 20, title: 'Pier 4', artist: 'Clairo', length: "3:30" },
        { id: 21, title: 'Show me how', artist: 'Men I Trust', length: "3:25" },
        { id: 22, title: 'Lost', artist: 'Frank Ocean', length: "3:54" },
        { id: 23, title: 'Ruthless', artist: 'The Marias', length: "4:08" },
        { id: 24, title: '360', artist: 'Charli XCX', length: "2:15" },
        { id: 25, title: 'I Know you', artist: 'Faye Webster', length: "4:15" },
        { id: 26, title: 'Best Friend', artist: 'Rex Orange County', length: "4:14" },
        { id: 27, title: 'Real Man', artist: 'beabadobee', length: "2:40" },
        { id: 28, title: 'Adore You', artist: 'Harry Styles', length: "3:27" },
        { id: 29, title: "The 90's", artist: 'FINNEAS', length: "3:40" },
        { id: 30, title: 'Hard to let go', artist: 'Men I Trust', length: "4:07" }
        ];
        setSongs(res);
    };

    fecthSongList();
    }, []);

    const addToLibrary = (song) => {
    const existing = JSON.parse(localStorage.getItem('librarySongs')) || [];
    if (!existing.some(s => s.id === song.id)) {
        const updated = [...existing, song];
        localStorage.setItem('librarySongs', JSON.stringify(updated));
        eventEmitter.emit('libraryUpdated', updated);
    }
    };

    return (
    <>
        <h3>Resultados de Búsqueda:</h3>
        {searchList.map(song => (
        <div className="searchResultItem" key={song.id}>
            <Song songTitle={song.title} songArtist={song.artist} songLength={song.length} />
            <button className="addButton" onClick={() => addToLibrary(song)}>
            <img className="addButtonIcon" src={addTo} alt="Add" />
            </button>
        </div>
        ))}
    </>
    );
};

export default SearchResults;