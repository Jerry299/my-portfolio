import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-header'>
                <div className='home-logo'>jeremiah</div>
                <div>hamburger</div>
            </div>
            <div className='home-row'>
                <div className='home-row_A'>
                    <div  className='home_wrapper'>
                        <p>Hi there <span></span> I'm</p>
                        <p>Jeremiah</p>
                        <p><span>Javascript Developer</span></p>
                        <p><span>lorem ipsum</span></p>
                    </div>
                </div>
                <div className='home-row_B'>
                    Home row B
                </div>
            </div>
        </div>
    )
}

export default Home;