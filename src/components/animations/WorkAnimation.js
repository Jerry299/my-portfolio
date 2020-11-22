import {gsap} from 'gsap';


 const openUp = (el) => {
    console.log("openup")
    gsap.to(el,{
        duration:1,
        ease: "elastic.out(1.75, 0.3)",
        css: {display: "block"}
    })
}

 const closeUp = (el) => {
    console.log("closeup")
    gsap.to(el,{
        duration:1,
        ease: "elastic.out(1.75, 0.3)",
        css: {display: "none"}
    })
}