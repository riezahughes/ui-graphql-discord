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
        if(this.props.emptyBlock == "false"){
            classList = "sb-btn-container discord-bkg-light";
            return(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className={classList}>
                        <div class="row">
                            <div class="col-12">
                                <button class="discord-btn-yes"><h5>{this.props.title}</h5></button><br/>
                            </div>
                            <div class="col-12">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <i class="far fa-keyboard"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <span>M</span>
                                    </li>
                                    <li className="list-inline-item">
                                        |
                                    </li>                                    
                                    <li className="list-inline-item">
                                      <i class="fas fa-stopwatch"></i>
                                    </li>
                                    <li className="list-inline-item">
                                       <v class="hide-on-mobile">Pressed: </v>12
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