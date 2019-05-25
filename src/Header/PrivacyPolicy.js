import React, {Component} from 'react';

export default class PrivacyPolicy extends Component{

constructor(props){
    super(props);
    this.hideMe = this.hideMe.bind(this);
    this.leaveMe = this.leaveMe.bind(this);
}   

hideMe(e){
    document.getElementById("top-page-bar").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("top-page-bar").style.height = 0;
    }, 500)

}

leaveMe(e){
    alert("getFucked");
}

    render(){
        return(
            <div className="row" id="top-page-bar">
                <div className="col-12">
                    <small className="privacy-text">This site uses cookies in order to function <span class="hide-on-mobile">correctly. Please confirm it's alright so we don't have to kick you.</span></small>&nbsp;<small><button onClick={this.hideMe} className="discord-btn-yes ml-1" type="button">I Agree</button> <button onClick={this.leaveMe} className="discord-btn-no ml-1" type="button">Begone Thot</button></small>
                </div>
            </div>
        );
    }
}