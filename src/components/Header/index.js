import React, { Component } from 'react';
import { logoMedium, searchButton, userButton }  from '../../images';

class Header extends Component {
    
    componentDidMount(){
        console.log('Header component has mount');
    }
    
    render() {
        return(
            <header>
                <div className = "titleContainer"> 
                    <button><div className = "titleButtonContainer"><img className = "mainLogoImage" src={logoMedium}></img><h1 className ="titleFont">Soundwave</h1></div></button>
                </div>
                <div className = "searchContainer">
                    <button className = "searchBody">
                        <div className = "searchButtonContainer">
                            <img className = "searchIcon" src={searchButton}></img>
                            <input type="search" placeholder="Buscar..." className="searchBody"></input>
                        </div>
                    </button>
                </div>
                <div className = "userContainer">
                    <button><img className = "userIcon" src={userButton}></img></button>
                </div>
            </header>
        )
    }
}

export default Header;