import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class DashboardSound extends Component{

    constructor(props){
        super(props);

    }   

    render(){
        let classList;
        if(this.props.emptyBlock == "true"){
            console.log("aye");
            classList = "sb-btn-container";
        }
        if(this.props.emptyBlock == "false"){
            classList = "sb-btn-container discord-bkg-light"
        }
        return(
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className={classList}>
                  <h5>{this.props.title}</h5><br/>
                  <button></button><br/>
                  <small><i class="far fa-keyboard"></i></small><br/>
                  <span>M</span>
                </div>
            </div>
        );
    }
}