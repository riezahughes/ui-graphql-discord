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
                                <button class="discord-btn-yes"><i class="fas fa-plus-square"></i> Create New Sound</button>
                            </li>                            
                            <li className="list-inline-item">
                                <button class="discord-btn-yes"><i class="fas fa-cog"></i> Settings</button>
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
                            <DashboardSound emptyBlock="true"/>                            
                            <DashboardSound emptyBlock="false" url="" title="Womp Womp" pressed="12" tag="Funny" keybind="M"/>
                            <DashboardSound emptyBlock="false" url="" title="Sloppyyyyy" pressed="287" tag="Dirty" keybind="N"/>
                            <DashboardSound emptyBlock="false" url="" title="Ay Papi" pressed="0" tag="Pickles" keybind="O"/>
                            <DashboardSound emptyBlock="false" url="" title="AvesUGHHH" pressed="567869" tag="Avesa" keybind="P"/>
                            <DashboardSound emptyBlock="false" url="" title="Stop It Ron" pressed="69" tag="Harry Potter" keybind="SPACE"/>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2">
                    </div>
                </div>
            </section>
        );
    }
}