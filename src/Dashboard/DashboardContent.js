import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DashboardSound from './DashboardSound';
export default class PanelContent extends Component{

constructor(props){
    super(props);
}   

    render(){
        return(
            <section>
                <div className="row">
                    <div className="d-none d-sm-block col-sm-1 col-md-1 col-lg-2">
                    </div>                
                    <div className="col-12 col-sm-5 col-md-5 col-lg-4 ">
                        <h2 className="text-center text-sm-left">Soundboard</h2>
                    </div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-4 user-top-buttons">
                        <ul className="list-inline text-center text-sm-right mb-0">
                            <li className="list-inline-item">
                                <button class="discord-btn-yes"><i class="fas fa-plus-square"></i> <span className="hide-on-mobile">Create New Sound</span></button>
                            </li>                            
                        </ul>
                    </div>
                    <div className=" d-none d-sm-block col-sm-1 col-md-1 col-lg-2">
                    </div>                    
                </div>
             
                <div className="row">
                    <div className="col-1 col-lg-2">
                    </div>
                    <div className="col-10 col-lg-8">
                        <div className="row content-container">
                            <DashboardSound content="this is some test content"/>
                            <DashboardSound content="this is some test content"/>
                            <DashboardSound content="this is some test content"/>
                            <DashboardSound content="this is some test content"/>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2">
                    </div>
                </div>
            </section>
        );
    }
}