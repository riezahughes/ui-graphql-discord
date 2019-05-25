import React from 'react';

function Header() {
  return (
        <div className="row">
            <div className="col-12 abs-cont">
                <h1 className="mb-0"><i className="fab fa-discord"></i> Discord Soundbot</h1>
                <small>Soundboard Bot and Application</small>
                <canvas id="header-noise" height="30" width="1920"></canvas>
            </div>
        </div>
  );
}

export default Header;