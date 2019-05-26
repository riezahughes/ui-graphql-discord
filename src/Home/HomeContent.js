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
                    <div className="col-lg-4 col-md-1">
                    </div>
                    <div className="col-lg-4 col-md-10 content-container">
                          <p>Register or Sign in</p>
                          <Link to="/dashboard"><button class="discord-btn-yes">Login</button></Link>
                    </div>
                    <div className="col-lg-4 col-md-1">
                    </div>
                </div>
            </section>
        );
    }
}