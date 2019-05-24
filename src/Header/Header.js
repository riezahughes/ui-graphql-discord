import React from 'react';

function Header() {
  return (
    <header>
        <div className="row top-page-bar">
            <div className="col-12">
                Available in only one language, because i'm an absolute crazy mad lad. <strong>[read more]</strong>
            </div>
        </div>
        <div className="row">
            <div className="col-12 abs-cont">
                <h1><i class="fab fa-discord"></i> Discord Soundbot</h1>
                <canvas id="header-noise" height="30" width="1920"></canvas>
            </div>
        </div>
    </header>
  );
}

export default Header;