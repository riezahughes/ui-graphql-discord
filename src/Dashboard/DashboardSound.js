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
            classList = "sb-btn-container emptyButton";
            return(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className={classList}>
                    <div className="row">
                        <div className="col-12 align-self-center">
                            <div className="">+</div>
                        </div>
                    </div>
                </div>
            </div>                
            )
        }
        if(this.props.emptyBlock !== "true"){
            classList = "sb-btn-container discord-bkg-light";
            return(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className={classList}>
                        <div className="row">                           
                            <div className="col-12">
                                <button className="discord-btn-yes main-button"><h5>{this.props.title}</h5></button><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                            </div>
                            <div className="col-10">
                                    <ul className="list-inline float-left">
                                        <li className="list-inline-item">
                                            <i className="fas fa-tag"></i> <span className="tag">{this.props.tag}</span>
                                        </li>
                                    </ul>
                                    <ul className="list-inline float-right">
                                        <li className="list-inline-item">
                                            <button class="settings-button"><i className="fas fa-cog"></i></button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button class="delete-button"><i className="fas fa-trash-alt discord-btn-no"></i></button>
                                        </li>                                            
                                    </ul>
                            </div>
                            <div className="col-1">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <hr/>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <i class="far fa-keyboard"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="keybind">{this.props.keybind}</span>
                                    </li>
                                    <li className="list-inline-item">
                                        |
                                    </li>                                    
                                    <li className="list-inline-item">
                                      <i class="fas fa-stopwatch"></i>
                                    </li>
                                    <li className="list-inline-item">
                                       Pressed: {this.props.pressed}
                                    </li>                                        
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            );            
        }

    }
}