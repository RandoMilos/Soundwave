    import React, { Component} from 'react';
    import { controlShuffle, controlPrev, controlPlay, controlNext, controlRepeat, controlVolumen }  from '../../images';

    class Footer extends Component{
        
        componentDidMount() {
            console.log('Footer has been mounted');
        }
        
        render(){
            return(
                <footer>
                <div className='mainPlayerControlContainer'>
                    <div className='playerControlContainer'>
                        <img className='playerControl' src={controlShuffle}></img>
                        <img className='playerControl' src={controlPrev}></img>
                        <img className='playerControl' src={controlPlay}></img>
                        <img className='playerControl' src={controlNext}></img>
                        <img className='playerControl' src={controlRepeat}></img>
                    </div>
                    <div className='volumenControlContainer'>
                        <img className='volumenControl' src={controlVolumen}></img>
                    </div>
                </div>
                </footer>
            )
        }
    } 

export default Footer;