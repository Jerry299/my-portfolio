import React,{useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import "./Burger.css";
import gsap from 'gsap'
import "../../App.css";


const Burger = ({state,handleMenu}) => {
//variables for selecting DOM nodes
  let menu = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  

//gsap animation starts
useEffect(() => {
  
  if(state.clicked === false){
    //close menu
    gsap.to([revealMenu,revealMenuBackground],{
      duration:1,
      height: 0,
      ease: "power3.inOut",
      opacity: 0.1,
      stagger: {
        amount: 0.09
      }
    });
    gsap.to(menu,{
      duration: 0.8,
      ease: "power3.inOut",
      css: {display: "none"}
    });
  }
  else if(state.clicked === true|| (state.clicked === true && state.initial === null)){
    //open our menu
     gsap.to(menu,{
      duration: 0,
      css: {display: "block"}
    });

    gsap.to([revealMenuBackground,revealMenu],{
      duration: 0,
      height: "100%",
      opacity: 1
    })
    staggerReveal(revealMenuBackground,revealMenu)
    staggerText(line1,line2,line3)
  };
},[state])
//gsap animation ends

//gsap helper functions
const staggerReveal = (node1,node2) => {
  gsap.from([node1,node2],{
    duration: 0.8,
    height: 0,
    transformOrigin: "left top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  })
};

const staggerText = (node1,node2,node3) => {
  gsap.from([node1,node2,node3],{
    duration: .8,
    delay: 0.2,
    y: 100,
    opacity:0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.5,
    } 
  })
}


  return (
    <div ref={el => (menu =el)} className="burger-menu">
      <div ref={el => (revealMenuBackground =el)} className="bg-secondary-color"></div>
      <div ref={el => (revealMenu =el)} className="menu-layer">
        <div className="menu-icon-bg"></div>
        <div className="container">
          <div className="wrapper">
            {/*  */}
            <div className="menu-links">
              <div className="close-menu-toggler" onClick={handleMenu}>
                <div className="menu-line menu-line-1"></div>
                <div className="menu-line menu-line-2"></div>
                <div className="menu-line menu-line-3"></div>
              </div>
              <nav>
                <ul>
                  <li ref={el => (line1 =el)}>
                    <Link  to="/about">
                      <div className="position">01.</div>About Me.
                    </Link>
                  </li>
                  
                  <li ref={el => (line2 =el)}>
                    <Link  to="/myworks">
                      <div className="position">02.</div>My Works.
                    </Link>
                  </li>

                  <li ref={el => (line3 =el)}>
                    <Link  to="/contact">
                      <div className="position">03.</div>Contact Me.
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
