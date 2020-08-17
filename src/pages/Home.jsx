import React from 'react';
import '../styles/Home.css'
import imgHead from '../assets/imgHead.svg'
import card1 from '../assets/card1.svg'

const Home = () => {
    return (
        <>
        <div className="section1">
            <h1 className="animate__animated animate__fadeInLeftBig">La moda a tus pies.</h1>
            <img className="imgHead animate__animated animate__fadeInRightBig animate__fast" src={imgHead} alt="" />
        </div>
        <div className="section2">
            <p className="text">Deal of The Day</p>
            <img className="card1 animate__animated animate__fadeInRightBig animate__fast" src={card1} alt="" />
        </div>
        </>
    );
}

export default Home;
