import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class DashboardSound extends Component{

constructor(props){
    super(props);
}   

    render(){
        return(
            <div className="col-12 col-md-6 col-lg-4">
                <div className="sb-btn-container">
                  <p>{this.props.content}</p>
                </div>

            </div>
        );
    }
}