import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Song from './components/Songs';
import { homeIcon, newIcon, radioIcon, libraryIcon, playlistIcon, playlistCover } from './images';

function App() {
  return (
    <>
      <body className = "appBody"> 
        <Header/>
        <main>
          <aside className = "navInfo">
            <div className= "shortIcons">
              <button className = "shortIcons__button"><img className = "shortIcons__image" src = {homeIcon}></img></button>
              <button className = "shortIcons__button"><img className = "shortIcons__image" src= {newIcon}></img></button>
              <button className = "shortIcons__button"><img className = "shortIcons__image" src= {radioIcon}></img></button>
            </div>
            <div className ="longInfoList">
              <button className="longInfoList__title"><img className = "longInfoList__Icon" src= {libraryIcon}></img><p className = "longInfoList__text">Biblioteca</p></button>
              <div className="longInfoList__items">
                <button className="longInfoList__item">Agregados recientemente</button>
                <button className="longInfoList__item">Artistas</button>
                <button className="longInfoList__item">Álbumes</button>
                <button className="longInfoList__item">Canciones</button>
              </div>
            </div>
            <div className= "longInfoList">
              <button className="longInfoList__title"><img className = "longInfoList__Icon" src={playlistIcon}></img><p className = "longInfoList__text"> Listas de Reproduccion</p></button>
              <div className="longInfoList__items">
                <button className="longInfoList__item">Todas las listas</button>
              </div>
            </div>
          </aside>
          <aside className ="mainSection">
            <div className = "titleSection">
              <img className = "titleSection__albumCover" src = {playlistCover}></img>
              <div className = "titleSection__text">
                <h1 className = "titleSection__textItem--title">The Softpop peak?</h1>
                <h2 className = "titleSection__textItem">Chill mood a tu dia con esta playlist de pop y bedroom pop para tus oidos.</h2>
                <p className='titleSection__subTextItem'>Pop/Indie · 2025</p>
              </div>
            </div>
            <div className='songListGrid'>
              <Song songNumber ="1" songTitle="Juna" songArtist= "Clairo" songLength="2:48"/>
              <Song songNumber ="2" songTitle="Amoeba" songArtist= "Clairo" songLength="2:26"/>
              <Song songNumber ="3" songTitle="Bags" songArtist= "Clairo" songLength="3:04"/>
              <Song songNumber ="4" songTitle="BIRDS OF A FEATHER" songArtist= "Billie Eilish" songLength="2:37"/>
              <Song songNumber ="5" songTitle="Good Days" songArtist= "SZA" songLength="2:35"/>
              <Song songNumber ="6" songTitle="Green" songArtist= "Cavetown" songLength="1:44"/>
              <Song songNumber ="7" songTitle="we fell in love in october" songArtist= "girl in red" songLength="2:35"/>
              <Song songNumber ="8" songTitle="This is home" songArtist= "Cavetown" songLength="3:30"/>
              <Song songNumber ="9" songTitle="Coming Home" songArtist= "beabadobee" songLength="3:49"/>
              <Song songNumber ="10" songTitle="Are you Bored Yet?" songArtist= "Wallows" songLength="2:24"/>
              <Song songNumber ="11" songTitle="Tuviste" songArtist= "BRATTY" songLength="3:20"/>
              <Song songNumber ="12" songTitle="Love songs" songArtist= "Margo Guryan" songLength="1:53"/>
              <Song songNumber ="13" songTitle="Gimme Love" songArtist= "Joji" songLength="2:01"/>
              <Song songNumber ="14" songTitle="I Would'nt ask you" songArtist= "Clairo" songLength="2:29"/>
            </div>
          </aside>
        </main>
        <Footer/>
      </body>
    </>
  );
}

export default App;
