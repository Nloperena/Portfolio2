import React from "react";
import "./Boom.css";
import Doggogif from "../../media/gifs/Shiba.gif";
import Doggoicon from "../../media/Icons/cap.png";


export class Boom extends React.Component {

    state = {
        title: ["Hi, welcome to my website!"],
        textbox: []
    }

    biographyButton(){
        this.setState({
            title: this.state.title =["Biography"],
            textbox: ["Hi! my name Nicholas, but I go by Nico for short. I am a front-end developer looking to sharpen my skills and become a valuable addition to someone's team. I am strong in the front-end and am a visual person. I specialize in React, have a passion for dogs and coding!"]
        });
    }

    portfolioButton(){
        this.setState({
            title: this.state.title = ["Portfolio"],
            textbox: [
            <div className= "card">
                <div id ="portfolio-page" className ="col s7">
                    <div className ="card-image">
                        <img id = "portfolio-card" src ={Doggoicon}></img>
                        <hr></hr>
                        <span className = "yeet black-text card-title">Work in Progress</span>
                    </div>
                    <div className = "card-content">
                        <p>Pardon my dust, I am still new here and slowly I am becoming a full webpage</p>
                    </div>
                </div>
            </div>]
        })
        console.log("Portfolio button is wired up!");
    }

    contactMeButton() {
        this.setState({
            title: this.state.title = ["Contact"],
            textbox: ["Email me at NicholasLoperena@gmail.com"]
        })
        console.log("Contact me button is wired up!");
    }

    render() {
        return (
        <div id = "content" className ="container">
            <div class="row">
                    <div class="col s4"><img id ="boombox" className ="responsive-img" src ={Doggogif}/></div>
                   
                    
    </div>
            <div className ="row" id = "row-adjustment">
                <div class = "container">
            <div class="col s12"  id = "in-box"><h1>{this.state.title}</h1>
            <p>{this.state.textbox}</p></div>
            </div>
                
               
            </div>
            <div className ="row">
                <div className="col-s1"id ="board2"><a  className="board waves-effect waves-light green lighten-1 btn-large"onClick ={this.biographyButton.bind(this)}>Biography</a>
                                        <a className="board waves-effect waves-light green lighten-1 btn-large portfolio" onClick ={this.portfolioButton.bind(this)}>Portfolio</a>
                                        <a className="board waves-effect waves-light green lighten-1 btn-large contact-me"  onClick ={this.contactMeButton.bind(this)}>Contact Me</a></div>
            </div>
        </div>

        )};
}

export default Boom;