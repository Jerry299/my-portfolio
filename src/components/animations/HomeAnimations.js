import {gsap} from 'gsap'

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
let words = ["Full Stack Javascript Developer","Passionate Learner","Technology Enthusiast"];

let masterTl = gsap.timeline({repeat: -1}).pause();


let boxTl = gsap.timeline()

export const underlineTextAndFadeUp = (el,el2) => {
    boxTl.to(el,{
        duration: 0.5,
        width: "75px",
        ease: "power4.inOut"
    })
    .from(el2,{
        duration: 1,
        y : 50,
        opacity:0,
        ease: "power3.out",
        onComplete: () => masterTl.play()
    })
    .to(el,{
        duration: 1,
        height: "34px",
        ease: "elastic.out"
    })
    .to(el,{
        duration: 2,
        autoAlpha:0.5,
        yoyo: true,
        repeat: -1,
        ease: "power4.inOut"
    })
}

export const homeAnimationsForMySkills = (element) => {
    gsap.to(element,{
   opacity:0,
   ease: "power2.inOut",
   repeat: -1
 })
}

export const wordsAnimation = (textElement) => {
    words.forEach(word => {
        let tl = gsap.timeline({repeat: 1,yoyo: true,repeatDelay: 1.5});
        tl.to(textElement,{
            duration: 1.9,
            text: word,
        })
        masterTl.add(tl)
    })
} 


export const animationForHomeHiandHomeName = (el1,el2) => {
    let homeTl = gsap.timeline();
    homeTl.to(el1,{
        duration: 0.5,
        
    })
}
