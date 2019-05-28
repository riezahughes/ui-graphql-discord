import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import DashboardSound from './DashboardSound';
import NewContent from './New/NewContent';
import FilterContent from './Filter/FilterContent';
import BotContent from './Bot/BotContent';
import AccountContent from './Account/AccountContent';

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
                        <Link to="/dashboard/"><h2 className="text-center text-lg-left text-white">Soundboard</h2></Link>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 user-top-buttons">
                        <ul className="list-inline text-center text-lg-right mb-0">
                            <li className="list-inline-item">
                                <Link to="/dashboard/new"><button class="discord-btn-maybe"><i class="fas fa-plus-square"></i> New Sound</button></Link>
                            </li>        
                            <li className="list-inline-item">
                                <Link to="/dashboard/filter"><button class="discord-btn-maybe"><i class="fas fa-list"></i> Filter</button></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/dashboard/settings"><button class="discord-btn-maybe"><i class="fas fa-cog"></i> Bot</button></Link>
                            </li>                            
                            <li className="list-inline-item">
                                <Link to="/dashboard/account"><button class="discord-btn-maybe"><i class="fas fa-user"></i> Account</button></Link>
                            </li>                                                                    
                        </ul>
                    </div>
                    <div className=" d-none d-sm-block col-sm-1 col-md-1 col-lg-2">
                    </div>                    
                </div>

                <div className="row">
                    <div className="d-none d-sm-block col-sm-1 col-md-1 col-lg-2">
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <Route exact path="/dashboard/new" component={NewContent}/>
                        <Route exact path="/dashboard/filter" component={FilterContent}/>
                        <Route exact path="/dashboard/settings" component={BotContent}/>
                        <Route exact path="/dashboard/account" component={AccountContent}/>
                    </div>
                    <div className="d-none d-sm-block col-sm-1 col-md-1 col-lg-2">
                    </div>                                          
                </div>
             
                <div className="row">
                    <div className="col-1 col-lg-2">
                    </div>
                    <div className="col-10 col-lg-8">
                        <div className="row content-container">                         
                            <DashboardSound url="" title="Womp Womp" pressed="12" tag="Funny" keybind="M"/>
                            <DashboardSound url="" title="Sloppyyyyy" pressed="287" tag="Dirty" keybind="N"/>
                            <DashboardSound url="" title="Ay Papi" pressed="0" tag="Pickles" keybind="O"/>
                            <DashboardSound url="" title="AvesUGHHH" pressed="567869" tag="Avesa" keybind="P"/>
                            <DashboardSound url="" title="Stop It Ron" pressed="69" tag="Harry Potter" keybind="SPACE"/>
                            <DashboardSound url="" title="Annoying Lala SFX" pressed="11" tag="FFXIV" keybind="ESC"/>
                            <DashboardSound url="" title="Louisoux.mp3" pressed="114" tag="FFXIV" keybind="L"/>
                            <DashboardSound emptyBlock="true"/>
                        </div>
                    </div>
                    <div className="col-1 col-lg-2">
                    </div>
                </div>
            </section>
        );
    }
}