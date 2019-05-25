import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class HomeContent extends Component{

constructor(props){
    super(props);
}   

    render(){
        return(
            <section>
                <div className="row">
                    <div className="col-12">
                        <h1>Add Bot. Make Buttons. Ruin Friendships.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-4 content-container">
                          <p>Lorem ipsum mcfuck yourself.</p>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </section>
        );
    }
}