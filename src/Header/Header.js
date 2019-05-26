import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
        <div className="row">
            <div className="col-12 abs-cont">
                <Link to="/"><h1 className="mb-0"><i className="fab fa-discord"></i> Discord Soundbot</h1></Link>
                <small>Soundboard Bot and Application</small>
                <canvas id="header-noise" height="30" width="1920"></canvas>
            </div>
        </div>
  );
}

export default Header;