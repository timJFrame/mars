import React from 'react'
import { Parallax, ParallaxLayer  } from '@react-spring/parallax'

//*Images
import stars from '../../images/stars.png'
import earth from '../../images/earth.png'
import mars from '../../images/mars.png'
import rocket from '../../images/rocket.png'


function Home(){
    return(
       

        <Parallax pages={3}>
           <div style={{ width: '100%', height: '100%', background: '#253237'}}>
               <ParallaxLayer offset={1} speed={1} style={{backgroundColor: '#805E73', opacity: 0.1}}/>
               <ParallaxLayer offset={2} speed={1} style={{backgroundColor: '#87BCDE', opacity: 0.1}}/>
               <div>
                   <h2 className="page-title">The Journey of Curiosity....</h2>
               </div>
            
               <ParallaxLayer 
               offset={0}
               speed={0}
               style={{backgroundImage: `src(${stars})`}}
               />



               
                <ParallaxLayer offset={0} speed={0.5}>
                   <img src={stars} alt="stars" className="stars-image"/>
               </ParallaxLayer>
               <ParallaxLayer offset={1} speed={0.5}>
                   <img src={stars} alt="stars" className="stars-image"/>
               </ParallaxLayer>

               <ParallaxLayer offset={2} speed={0.5}>
                   <img src={stars} alt="stars" className="stars-image"/>
               </ParallaxLayer>

               <ParallaxLayer offset={0.1} speed={-0.5} >
               <img src={earth} alt="earth" style={{marginLeft: '10%', width: '30%'}}/>
               </ParallaxLayer>

              

               <ParallaxLayer offset={2.1} speed={-0.5} >
               <img src={mars} alt="mars" style={{marginLeft: '50%', width: '40%'}}/>
               </ParallaxLayer>

               <ParallaxLayer offset={1.4} speed={-0.8} >
               <img src={rocket} alt="mars" style={{marginLeft: '40%', width: '20%'}}/>
               </ParallaxLayer>


           </div>

        </Parallax>
    )
}

export default Home