import React,{useEffect,useRef} from "react";
import "./Home.css";
import {homeAnimationsForMySkills,underlineTextAndFadeUp,wordsAnimation} from './animations/HomeAnimations'

const Home = () => {
//variabes for DOM Apis
let mySkills = useRef(null)
let box = useRef(null)
let letterA = useRef(null)
let text = useRef(null)
//array for what i do
//let words = ["Javascript Full Stack Developer","Passionate Learner","Technology Enthusiast"]
useEffect(() => {
 homeAnimationsForMySkills(mySkills)
 underlineTextAndFadeUp(box,letterA)
 wordsAnimation(text)
})


  return (
    <section className="home-container">
      <div className="home-wrapper">
        <h1 className="home-hi">
          {" "}
          Hello <span id="home-world">World,</span>
        </h1>
        <h2 className="home-name">
          <div className="i-am">I am</div> <span className="my-name">Joseph Chinemerem Jeremiah</span>.
        </h2>
        <div className="home-sentence">
          <p className="home-skills">
            <span className="box" ref={el => box = el} ></span>
           <span className="letterA" ref={el => letterA = el} >I'm A  </span> 
           {" "}
           <span className="text" ref={el => text = el}></span> 
           <span className="skill" ref={el => mySkills = el} >_</span>.
          </p>
        </div>
      </div>
      <div className="click">
        <p>
          <em>click on menu to get started.</em>
        </p>
      </div>
    </section>
  );
};

export default Home;
