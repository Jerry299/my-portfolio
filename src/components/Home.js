import React,{useState,useEffect,useRef} from "react";
import gsap from 'gsap'
import "./Home.css";

const Home = () => {
//variabes for DOM Apis
let mySkills = useRef(null)
//array for what i do
let words = ["Javascript Full Stack Developer","Passionate Learner","Technology Enthusiast"]
useEffect(() => {
 gsap.to(mySkills,{
   opacity:0,
   ease: "power2.inOut",
   repeat: -1
 })
})


  return (
    <section className="home-container">
      <div className="home-wrapper">
        <h1 className="home-hi">
          {" "}
          Hello <span id="home-world">World,</span>
        </h1>
        <h2 className="home-name">
          <span className="i-am">I am</span> <span className="my-name">Joseph Chinemerem Jeremiah</span>.
        </h2>
        <div className="home-sentence">
          <p className="home-skills">
            A <span className="skill" ref={el => mySkills = el} >_</span>.
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
