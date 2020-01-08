import React, { Component } from "react";
import ReactDOM from 'react-dom';

//Hardcoding to get images for now
//Must get it from databse
import logo from './nycoreLogo.jpeg';
import themeImage from './fd.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import Fade from 'react-reveal/Fade';

import './index.css';

class MainLogoSection extends Component {
    render(){
        //Get the year from database with increment system that needs to be implemented
        let AnnualYear = "9"; //I know it is 9th but change it later
        return(
            <div className="LogoHolder">
                <div style={{paddingTop:150}}>
                    <img src={logo} alt="logo" className="logo" style={{paddingBottom:10}}></img>
                    <Fade left>
                        <h3 style={{paddingRight:100}}>New York Collective</h3>
                    </Fade>
                    <Fade right>
                        <h3 style={{paddingLeft:100,}}>of Radical Educators</h3>
                    </Fade>
                    <hr class="hr" style={{borderTop:"1px solid white"}}></hr>
                    <h2 className="annualGreet">NYCoRE's {AnnualYear}th Annual Conference</h2>
                </div>
            </div>
        )
    }
}

class Theme extends Component {
    render(){
        return(
            <div className="themeMainHolder">
                <div className="container" style={{paddingTop:50}}>
                    <div className="row">
                        <Fade left>
                            <div className="col-sm-6 themeImgaeHolder">
                                <img src={themeImage} alt="Theme" className="themeImage"></img>
                            </div>
                        </Fade>
                        <Fade right>
                                <div className="col-sm-6 themeObjectiveHolder">
                                    {/* {Need to get these from Database} */}
                                    <div style={{paddingTop:80}}>
                                        <p style={{color:"#3fb8ea"}}>Freedom Dream</p>
                                        <li><h6>What might freedom dreaming look like? Sound like? Feel like?</h6></li>
                                        <li><h6>How would power dynamics need to shift in order to center the freedom dreams of the oppressed, marginalized and "othered"?</h6></li>
                                        <li><h6>What did freedom look like before colonization?</h6></li>
                                        <li><h6>How can we make freedom dreaming a praxis?</h6></li>
                                    </div>
                                </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

class MainComponenet extends Component {
    render(){
        return(
            <div>
                <MainLogoSection />
                <Theme />
            </div>
        )
    }
}

ReactDOM.render(<MainComponenet/>,document.getElementById("root"))