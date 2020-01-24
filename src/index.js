import React, { Component } from "react";
import ReactDOM from 'react-dom';

import logo from './nycoreLogo.jpeg';
import schedule from './schedule.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import Fade from 'react-reveal/Fade';
import {
    isBrowser,
    isMobile
} from "react-device-detect";
import * as firebase from 'firebase';

import './index.css';

const firebaseConfig = {
    apiKey: "AIzaSyCSk-pQU58fSMrODUFkQatWu1L8XI5JaaM",
    authDomain: "nycore-ca04a.firebaseapp.com",
    databaseURL: "https://nycore-ca04a.firebaseio.com",
    projectId: "nycore-ca04a",
    storageBucket: "nycore-ca04a.appspot.com",
    messagingSenderId: "722085679747",
    appId: "1:722085679747:web:167111abb6a96f381fc1b6",
    measurementId: "G-7LBN3ZBRSG"
  };
firebase.initializeApp(firebaseConfig);

class MainLogoSection extends Component {
    constructor(){
        super();
        this.state = {
            year:0,
        }
    }

    componentDidMount(){
        console.log(this.state.year)
        const configRef = firebase.database().ref().child("config");
        configRef.on("value" , snap=>{
            this.setState({
                year:snap.val().YearNumber
            })
        })
    }

    render(){
        return(
            <div className="LogoHolder">
                <div className ="LogoContentHolder">
                    <img src={logo} alt="logo" className="logo" style={{paddingBottom:10}}></img>
                    <Fade left>
                        <h3 style={{paddingRight:100}}>New York Collective</h3>
                    </Fade>
                    <Fade right>
                        <h3 style={{paddingLeft:100,}}>of Radical Educators</h3>
                    </Fade>
                    <hr className="hr" style={{borderTop:"1px solid white"}}></hr>
                    <h3 className="annualGreet"><span className="notranslate">NYCoRE's</span> {this.state.year}th Annual Conference</h3>
                    <h1 className="downArrow">&#8595;</h1>
                        
                </div>
            </div>
        )
    }
}

class Theme extends Component {
    constructor(){
        super();
        this.state = {
            year:0,
            themeName:"",
            themeImage:"url",
            themeObjective:""
        }
    }
    componentDidMount(){
        const configRef = firebase.database().ref().child("config");
        configRef.on("value" , snap=>{
            this.setState({
                year: snap.val().YearNumber,
                themeName: snap.val().YearTheme,
                themeObjective: snap.val().ThemeObjective
            })
        })
        const ThemeImageRef = firebase.database().ref().child("imageURL");
        ThemeImageRef.on("value" , snap=>{
            this.setState({
                themeImage:snap.val().themeImage
            })
        })
    }

    render(){
        const checkDevice = ()=>{
            if (isMobile) {
                return "themeImageMobile"
            }
            if (isBrowser) {
                return "themeImageBrowser"
            }
        }
        return(
            <div className="themeMainHolder">
                <div className="container" style={{paddingTop:50}}>
                    <h4 className="itsLive">It's live! <span className="notranslate">NYCoRE's</span> {this.state.year}th Conference theme is "{this.state.themeName}"</h4>
                    <div className="row" style={{paddingTop:20}}>
                        <Fade bottom>
                            <div className="col-sm-5 themeImgaeHolder">
                                <img src={this.state.themeImage} alt="Theme" className={checkDevice()}></img>
                            </div>
                        </Fade>
                        <Fade top>
                            <div className="col-sm-2">
                                <span className="vl my-auto">
                                </span>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-5 themeObjectiveHolder my-auto">
                                {/* {Need to get these from Database} */}
                                <div style={{paddingTop:50}}>
                                    <p style={{color:"#3fb8ea"}}><span className="notranslate">{this.state.themeName}</span></p>
                                    <p>{this.state.themeObjective}</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

class ThankYou extends Component {
    constructor(){
        super();
        this.state={
            conferenceThank:[],
            nycoreThank:[],
            specialTeam:[]
        }
    }
    componentDidMount(){
        const conferenceThankFB = firebase.database().ref().child("Mentions/conferenceThank");
        conferenceThankFB.on("value" , snap=>{
            let temp=[];
            let keys = Object.keys(snap.val())
            for ( var i = 0; i < keys.length; i++){
                temp.push(snap.val()[keys[i]]);
            }
            this.setState({
                conferenceThank: temp
            })
        })
        const nycoreThankFB = firebase.database().ref().child("Mentions/nycoreThank");
        nycoreThankFB.on("value" , snap=>{
            let temp=[];
            let keys = Object.keys(snap.val())
            for ( var i = 0; i < keys.length; i++){
                temp.push(snap.val()[keys[i]]);
            }
            this.setState({
                nycoreThank: temp
            })
        })
        const specialTeamFB = firebase.database().ref().child("Mentions/specialTeam");
        specialTeamFB.on("value" , snap=>{
            let temp=[];
            let keys = Object.keys(snap.val())
            for ( var i = 0; i < keys.length; i++){
                temp.push(snap.val()[keys[i]]);
            }
            this.setState({
                specialTeam: temp
            })
        })
    }
    render(){
        return(
            <div className="thankYouMainContainer">
                <div className="container">
                    
                    <h4><u>Thank You's</u></h4>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-4">
                            <h5><u>Conference-Planning</u></h5>
                            {this.state.conferenceThank.map(data=>(
                                <p className="notranslate">{data.Name},</p>
                            ))}
                        </div>
                        <div className="col-sm-4">
                            <h5><u>Special Mentions</u></h5>
                            {this.state.nycoreThank.map(data=>(
                                <p className="notranslate">{data.Name},</p>
                            ))}
                            
                        </div>
                        <div style={{display:"block"}} className="col-sm-4">
                            <h5><u>NYCore Team</u></h5>
                            {this.state.specialTeam.map(data=>(
                                <p className="notranslate">{data.Name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Schedule extends Component {
    constructor(){
        super();
        this.state={
            event:[]
        }
    }
    componentDidMount(){
        const scheduleRef = firebase.database().ref().child("schedule");
        scheduleRef.on("value" , snap=>{
            let temp=[];
            let keys = Object.keys(snap.val())
            for ( var i = 0; i < keys.length; i++){
                temp.push(snap.val()[keys[i]]);
            }
            this.setState({
                event:temp
            })
        })
    }
    render(){
        return(
            <div className="scheduleMainHolder container">
                <h4>Day @ A Glance</h4>
                <br></br>
                <div className="row">
                    <div className="col-sm-5" style={{textAlign:"right"}}>
                        <img src={schedule} id="schedImg" alt="schedule"></img>
                    </div>
                    <div className="col-sm-2">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-5 my-auto" id="timeName">
                        {this.state.event.map(data=>(
                            <h4>{data.Event}: {data.From}{data.FromSelect}-{data.To}{data.ToSelect}</h4>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class Workshops extends Component {
    constructor(){
        super();
        this.state = {
            workshops:[]
        }
    }
    componentDidMount(){
        const workshopRef = firebase.database().ref().child("workshops");
        workshopRef.on('value' , snap =>{
            let temp = [];
            let keys = Object.keys(snap.val())
            for ( var i = 0; i < keys.length; i++){
                temp.push(snap.val()[keys[i]]);
            }
            this.setState({
                workshops: temp
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.workshops.map(data=>(
                    <div className="workshopMainConteinter">
                    <div className="row">
                        <div className="col-sm-2 workshopTitle my-auto">
                            <h3>{data.workshopTitle}</h3>
                        </div>
                        <div className="col-sm-7 workshopDescription my-auto">
                            <p>{data.workshopDescription}</p>
                        </div>
                        <div className="col-sm-1">
                            <span className="vl"></span>
                        </div>
                        <div className="col-sm-2 workshopSignUp">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Time:</p>
                                    <p>Location:</p>
                                    <p>Facilitator</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>{data.workshopTime}</p>
                                    <p>{data.workshopLocation}</p>
                                    <p>{data.workshopFacilitator}</p>
                                </div>
                            </div>
                            
                            <button type="button" onClick={()=>{
                                var name = prompt("Please enter your Name: ");
                                if (name == null || name == "") {
                                    alert("Please enter your Name.")
                                }
                                else{
                                    const signedUp = firebase.database().ref().child("signedUp");
                                    signedUp.push({
                                        Name:name,
                                        Workshop:data.workshopTitle
                                    })
                                    window.open(data.googleCalendar);
                                }
                                
                            }
                            }className="btn btn-danger">Add to Calendar</button>
                        </div>
                    </div>
                    <hr className="hr" style={{borderTop:"1px solid white"}}></hr>
                </div>
    
                ))}
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
                <ThankYou />
                <Schedule/>
                <Workshops />
            </div>
        )
    }
}

ReactDOM.render(<MainComponenet/>,document.getElementById("root"))