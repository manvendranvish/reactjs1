import React from "react";
import Navbar from "./Navbar";

class LeftsideBar extends React.Component{
 render(){
    return (
          <React.Fragment>
             <header id="header">
                <div className="d-flex flex-column">
                      <div className="profile">
                          <img src={this.props.profileimg} alt="" className="img-fluid rounded-circle"/>
                          <h1 className="text-light"><a href="index.html">Manvendra Pratap Singh</a></h1>
                          <div className="social-links mt-3 text-center">
                            <a href="https://reactjs.org" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://reactjs.org" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="https://reactjs.org" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="https://reactjs.org" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="https://reactjs.org" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                          </div>
                      </div>
                       <Navbar/>
                </div>
             </header>
          </React.Fragment>
    );
 }
}

export default LeftsideBar;