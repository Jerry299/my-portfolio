 import React,{useEffect,useRef} from 'react';
import "./MyWorks.scss";

const Work = (props) => {
  //variables for selecting DOM nodes
  let wrapper = useRef(null)
  const enterMouse = () => {
    console.log("Mouse don Enter")
  }
  useEffect(() => {
    
  })


  return (
    <div className="work-container">
      
      {/* project start */}
      <div className={`work-wrapper ${props.id % 2 === 0 ? 'work-wrapper-even' : 'work-wrapper-odd'}`}
        ref={el => (wrapper = el)}
      >
        <div className="card-info" onMouseEnter={enterMouse}>
          <div>
            <h2>{props.name}</h2>
            <p className="intro"> {props.intro} </p>
            <p className="tags"><span className="solid_tag">Tags: </span> <span className="tag_items">{props.tag}</span></p>
          </div>
        </div>
        
        <div className="cards">
            <div className="header-image">
              <img src={`${props.imageUrl}`} alt="" className="img"/>
            </div>

          <div className="body_post">
            <div className="body_post_info">
              <div className="body_post_links">
                <div className="butn-cover">
                  <a href="" target="_blank" rel="noreferrer noopener" className="butn">See On Github</a>
                  <a href="" target="_blank" rel="noreferrer noopener" className="butn2">See Live</a>
                </div> 
              </div>
            </div>
          </div>
        </div>
            
      </div> 
      {/* project ends */}
      
    </div>
  );
};


export default Work;