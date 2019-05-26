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
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 ">
                        <h2 className="text-center text-lg-left">Soundboard</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 user-top-buttons">
                        <ul className="list-inline text-center text-lg-right mb-0">
                            <li className="list-inline-item">
                                <button class="discord-btn-yes"><i class="fas fa-plus-square"></i> New Sound</button>
                            </li>        
                            <li className="list-inline-item">
                                <button class="discord-btn-yes"><i class="fas fa-list"></i> Filter</button>
                            </li>
                            <li className="list-inline-item">
                                <button class="discord-btn-yes"><i class="fas fa-cog"></i> Bot</button>
                            </li>                            
                            <li className="list-inline-item">
                                <button class="discord-btn-yes"><i class="fas fa-user"></i> Account</button>
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
                            <DashboardSound emptyBlock="false" url="" title="Annoying Lala SFX" pressed="11" tag="FFXIV" keybind="ESC"/>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2">
                    </div>
                </div>
            </section>
        );
    }
}