import React from 'react'
import Fade from 'react-reveal'

function About(){
    return(
        
<main className="page-container"> 

    <div className="page-container__title">
        <h1>About Curiosity</h1>
    </div>

    <article className="cards-container">
        <Fade left>
        <section className="card">
        <div className="card__title">
            <h2>Who is Curiosity</h2>
        </div>
        <div className="card__text">
            <p>Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars.</p>
        </div>
        </section>
        </Fade>

        <Fade right>
        <section className="card">
        <div className="card__title">
            <h2>Curiosity's Journey</h2>
        </div>
        <div className="card__list">
            <ul>
                <li><strong>Launch:</strong>Cape Canaveral on 26 November 2011, at 15:02:00 UTC</li>
                <li><strong>Trip Duration:</strong>253 Days</li>
                <li><strong>Landing</strong> Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC</li>
            </ul>
        </div>
        </section>
        </Fade>

        <Fade left>
        <section className="card">
        <div className="card__title">
            <h2>Curiosity's Mission:</h2>
            <h3>Surveying Gale Crater</h3>
        </div>
        <div className="card__text">
            <p>Curiosity explores Gale Crater and acquires rock, soil, and air samples for onboard analysis. The car-size rover is about as tall as a basketball player and uses a 7 foot-long arm to place tools close to rocks selected for study. Curiosity's large size allows it to carry an advanced kit of 10 science instruments. It has tools including 17 cameras, a laser to vaporize and study small pinpoint spots of rocks at a distance, and a drill to collect powdered rock samples. It hunts for special rocks that formed in water and/or have signs of organics.</p>
        </div>
        </section>
        </Fade>

        <Fade right>
        <section className="card">
        <div className="card__title">
            <h2>Curiosity's Mission:</h2>
            <h3>Strong, Smart and Curious</h3>
        </div>
        <div className="card__text">
            <p>Curiosity carries the biggest, most advanced instruments for scientific studies ever sent to the Martian surface. The history of Martian climate and geology is written in the chemistry and structure of the rocks and soil. Curiosity reads this record by analyzing powdered samples drilled from rocks. It also measures the chemical fingerprints present in different rocks and soils to determine their composition and history, especially their past interactions with water.</p>
        </div>
        </section>
        </Fade>

        <Fade left>
        <section className="card">
        <div className="card__title">
            <h2>Curiosity's Mission:</h2>
            <h3>Coming in for a Landing</h3>
        </div>

        <div className="card__text">
            <p>CMars Science Laboratory arrived at Mars through technological innovations that tested a completely new landing method. The spacecraft descended on a parachute, then during the final seconds before landing, the landing system fired rockets to allow it to hover while a tether lowered Curiosity to the surface. The rover landed on its wheels, the tether was cut, and the landing system flew off to crash-land a safe distance away.</p>
        </div>
        </section>
        </Fade>
    </article>


</main>
       
    )
}
 export default About