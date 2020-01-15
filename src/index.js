import React, { Component } from "react";
import ReactDOM from 'react-dom';

//Hardcoding to get images for now
//Must get it from databse
import logo from './nycoreLogo.jpeg';
import themeImage from './fd.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import Fade from 'react-reveal/Fade';
import {
    isBrowser,
    isMobile
  } from "react-device-detect";

  

import './index.css';

class MainLogoSection extends Component {
    render(){
        //Get the year from database with increment system that needs to be implemented
        let AnnualYear = "9"; //I know it is 9th but change it later
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
                    <hr class="hr" style={{borderTop:"1px solid white"}}></hr>
                    <h3 className="annualGreet"><span className="notranslate">NYCoRE's</span> {AnnualYear}th Annual Conference</h3>
                    <h1 className="downArrow">&#8595;</h1>
                </div>
            </div>
        )
    }
}

class Theme extends Component {
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
                    {/* Need to get the year from Database from before same handler */}
                    <h4 className="itsLive">It's live! <span className="notranslate">NYCoRE's</span> 9th Conference theme is "Freedom Dreams"</h4>
                    <div className="row" style={{paddingTop:20}}>
                        <Fade bottom>
                            <div className="col-sm-5 themeImgaeHolder">
                                <img src={themeImage} alt="Theme" className={checkDevice()}></img>
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
                                    <p style={{color:"#3fb8ea"}}><span className="notranslate">Freedom Dream</span></p>
                                    <li>What might <span class="notranslate">freedom dreaming</span> look like? Sound like? Feel like?</li>
                                    <li>How would power dynamics need to shift in order to center the freedom dreams of the oppressed, marginalized and "othered"?</li>
                                    <li>What did freedom look like before colonization?</li>
                                    <li>How can we make freedom dreaming a praxis?</li>
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
    render(){
        return(
            <div className="thankYouMainContainer">
                <div className="container">
                    <h4><u>Special Thank You</u></h4>
                    <div className="row">
                        <div className="col-sm-6">
                            <h5><u>Conference-Planning</u></h5>
                            <p className="notranslate">Michael Scott, Dwight Schrute, Jim Halpert, Pam Beesly, Ryan Howard, Andy Bernard, Robert California, Stanley Hudson, Kevin Malone, Meredith Palmer, Angela Martin, Oscar Martinez, Phyllis Vance, Creed Bratton</p>
                        </div>
                        <div className="col-sm-6">
                            <h5><u>NYCore Team</u></h5>
                            <p className="notranslate">Michael Scott, Dwight Schrute, Jim Halpert, Pam Beesly, Ryan Howard, Andy Bernard, Robert California, Stanley Hudson, Kevin Malone, Meredith Palmer, Angela Martin, Oscar Martinez, Phyllis Vance, Creed Bratton</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Workshops extends Component {
    render(){
        return(
            <div className="workshopMainConteinter">
                <div className="row">
                    <div className="col-sm-2 workshopTitle my-auto">
                        <h3>The Office</h3>
                    </div>
                    <div className="col-sm-7 workshopDescription my-auto">
                        <p>This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.</p>
                    </div>
                    <div className="col-sm-1">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-2 workshopSignUp">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Time:</p>
                                <p>Location:</p>
                                <p>Facilitator:</p>
                            </div>
                            <div className="col-sm-6">
                                <p>99:99</p>
                                <p>TBD</p>
                                <p>Facilitator</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger">Add to Calendar</button>
                    </div>
                </div>
                <hr class="hr" style={{borderTop:"1px solid white"}}></hr>

                <div className="row">
                    <div className="col-sm-2 workshopTitle my-auto">
                        <h3>Parks and Recreations</h3>
                    </div>
                    <div className="col-sm-7 workshopDescription my-auto">
                        <p>Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.</p>
                    </div>
                    <div className="col-sm-1">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-2 workshopSignUp">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Time:</p>
                                <p>Location:</p>
                                <p>Facilitator:</p>
                            </div>
                            <div className="col-sm-6">
                                <p>99:99</p>
                                <p>TBD</p>
                                <p>Facilitator</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger">Add to Calendar</button>
                    </div>
                </div>
                <hr class="hr" style={{borderTop:"1px solid white"}}></hr>
                
                <div className="row">
                    <div className="col-sm-2 workshopTitle my-auto">
                        <h3>How I Met Your Mother</h3>
                    </div>
                    <div className="col-sm-7 workshopDescription my-auto">
                        <p>Ted has fallen in love. It all started when his best friend, Marshall, drops the bombshell that he plans to propose to longtime girlfriend Lily, a kindergarten teacher. Suddenly, Ted realizes that he had better get a move on if he hopes to find true love. Helping him in the quest is Barney, a friend with endless -- often outrageous -- opinions, a penchant for suits and a foolproof way to meet women. When Ted meets Robin, he is sure it's love at first sight, but the affair fizzles into friendship. Voice-over by Bob Saget ("Full House") tells the story through flashbacks.</p>
                    </div>
                    <div className="col-sm-1">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-2 workshopSignUp">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Time:</p>
                                <p>Location:</p>
                                <p>Facilitator:</p>
                            </div>
                            <div className="col-sm-6">
                                <p>99:99</p>
                                <p>TBD</p>
                                <p>Facilitator</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger">Add to Calendar</button>
                    </div>
                </div>
                <hr class="hr" style={{borderTop:"1px solid white"}}></hr>


                <div className="row">
                    <div className="col-sm-2 workshopTitle my-auto">
                        <h3>Friends</h3>
                    </div>
                    <div className="col-sm-7 workshopDescription my-auto">
                        <p>Three young men and three young women -- of the BFF kind -- live in the same apartment complex and face life and love in New York. They're not above sticking their noses into one another's business and swapping romantic partners, which always leads to the kind of hilarity average people will never experience -- especially during breakups.</p>
                    </div>
                    <div className="col-sm-1">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-2 workshopSignUp">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Time:</p>
                                <p>Location:</p>
                                <p>Facilitator:</p>
                            </div>
                            <div className="col-sm-6">
                                <p>99:99</p>
                                <p>TBD</p>
                                <p>Facilitator</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger">Add to Calendar</button>
                    </div>
                </div>
                <hr class="hr" style={{borderTop:"1px solid white"}}></hr>


                <div className="row">
                    <div className="col-sm-2 workshopTitle my-auto">
                        <h3>Game of Thrones</h3>
                    </div>
                    <div className="col-sm-7 workshopDescription my-auto">
                        <p>George R.R. Martin's best-selling book series "A Song of Ice and Fire" is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a deadly game for control of the Seven Kingdoms of Westeros, and to sit atop the Iron Throne. Martin is credited as a co-executive producer and one of the writers for the series, whose shooting locations include Northern Ireland, Malta, Croatia and Spain.</p>
                    </div>
                    <div className="col-sm-1">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-2 workshopSignUp">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Time:</p>
                                <p>Location:</p>
                                <p>Facilitator:</p>
                            </div>
                            <div className="col-sm-6">
                                <p>99:99</p>
                                <p>TBD</p>
                                <p>Facilitator</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger">Add to Calendar</button>
                    </div>
                </div>
                <hr class="hr" style={{borderTop:"1px solid white"}}></hr>


                <div className="row">
                    <div className="col-sm-2 workshopTitle my-auto">
                        <h3>The Office</h3>
                    </div>
                    <div className="col-sm-7 workshopDescription my-auto">
                        <p>Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                    </div>
                    <div className="col-sm-1">
                        <span className="vl"></span>
                    </div>
                    <div className="col-sm-2 workshopSignUp">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Time:</p>
                                <p>Location:</p>
                                <p>Facilitator:</p>
                            </div>
                            <div className="col-sm-6">
                                <p>99:99</p>
                                <p>TBD</p>
                                <p>Facilitator</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger">Add to Calendar</button>
                    </div>
                </div>
                <hr class="hr" style={{borderTop:"1px solid white"}}></hr>

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
                <Workshops />
            </div>
        )
    }
}

ReactDOM.render(<MainComponenet/>,document.getElementById("root"))