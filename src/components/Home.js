import React,{useEffect,useRef} from "react";
import "./Home.css";
import {homeAnimationsForMySkills,underlineTextAndFadeUp,wordsAnimation,animationForHomeHiandHomeName} from './animations/HomeAnimations'

const Home = () => {
//variabes for DOM Apis
let mySkills = useRef(null)
let box = useRef(null)
let letterA = useRef(null)
let text = useRef(null)
let homeHi = useRef(null)
let homeWorld = useRef(null)
let myName = useRef(null)
let myName1 = useRef(null)
let myName2 = useRef(null)
//array for what i do
//let words = ["Javascript Full Stack Developer","Passionate Learner","Technology Enthusiast"]
useEffect(() => {
 homeAnimationsForMySkills(mySkills)
 underlineTextAndFadeUp(box,letterA)
 wordsAnimation(text)
 animationForHomeHiandHomeName(homeHi,homeWorld,myName,myName1,myName2)
})


  return (
    <section className="home-container">
      <div className="home-wrapper">
        <h1 className="home-hi" ref={el => homeHi = el} >
          {" "}
          Hello <span id="home-world">World,</span>
        </h1>
        <h2 className="home-name">
          <div className="i-am" ref={el => homeWorld = el}>I am</div> 
          <span className="my-name" ref={el => myName = el} >Joseph </span>{" "}
          <span className="my-name2" ref={el => myName1 = el}>Chinemerem</span>{" "}
          <span className="my-name3" ref={el => myName2 = el}>Jeremiah.</span>
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
