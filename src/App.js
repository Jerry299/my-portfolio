import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/newComponents/statelessComponents/Home/Home'


import "./App.css";

function App() {
  return (
    <Router className="container">
     <Home/>
    </Router>
  );
}

export default App;








//  {/* <div className="app-container">
//         <Header />
//         <Cursor />
//         <div className="wrapper">
//           <div className="app-home">
//             <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/about" exact component={About} />
//               <Route path="/myworks" exact component={MyWorks} />
//               <Route path="/contact" exact component={ContactMe} />
//             </Switch>
//           </div>
//         </div>
//       </div> */}
// import Home from "./components/Home";
// import About from "./components/statelessComponents/About";
// import MyWorks from "./components/statelessComponents/MyWorks";
// import ContactMe from "./components/statefulComponents/ContactMe";
// import Header from "./components/statelessComponents/Header";
// import Cursor from "./components/statelessComponents/Cursor";
