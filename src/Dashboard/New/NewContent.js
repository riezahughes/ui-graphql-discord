import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class NewContent extends Component{

constructor(props){
    super(props);
    this.state = {
        "name": "",
        "file": "",
        "tag": "",
        "hotkey": ""
    }
    this.enterText = this.enterText.bind(this);
    this.enterTag = this.enterTag.bind(this);
    this.enterHotkey = this.enterHotkey.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUploadChoice = this.onUploadChoice.bind(this);
}   



enterText(e){
    this.setState({
        "name": e.target.value
    });
}

onSubmit(e){
    e.preventDefault();
}

onUploadChoice(e){
    this.setState({
        "file": e.target.files[0]
    })
}

enterTag(e){
    this.setState({
        "tag": e.target.value
    })
}

enterHotkey(e){
    this.setState({
        "hotkey": e.target.value
    })
}

    render(){
        return(
            <div id="createNew" className="text-left">
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-4">
                            <label for="newname">Title:</label>
                            <input className="form-control" type="text" value={this.state.name} onChange={this.enterText} id="newname" name="newname"/>
                        </div>
                        <div className="form-group col-3">
                            <label for="tagChoice">Tag:</label>
                            <select className="form-control" name="tagChoice" id="tagChoice" onChange={this.enterTag}>
                                <option>HarryPotter</option>
                                <option>test</option>
                                <option>ffxiv</option>
                            </select>
                        </div>
                        <div className="form-group col-1">
                            <label for="hotkeyChoice">Hotkey:</label>
                            <input className="form-control" type="text" name="hotkeyChoice" id="hotkeyChoice" onChange={this.enterHotkey} value={this.state.hotkey} />
                        </div>
                        <div className="form-group col-4">
                        <label for="soundUpload">Sound:</label>
                            <input className="form-control" type="file" id="soundUpload" name="soundUpload" onChange={this.onUploadChoice}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-12 text-right">
                            <button clasName="btn btn-fluid form-control w-100" type="button" id="submitNewSound" name="submitNewSound">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}