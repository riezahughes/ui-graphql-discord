import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class DashboardSound extends Component{

constructor(props){
    super(props);
}   

    render(){
        return(
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="sb-btn-container">
                  <br/>
                  <h5>{this.props.title}</h5><br/>
                  <button></button><br/>
                  <small><i class="far fa-keyboard"></i></small><br/>
                  <span>M</span>
                </div>

            </div>
        );
    }
}