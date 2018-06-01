import React from 'react';
import {Info} from './info.js'
import {Thumbs} from './thumbs.js'


export class Parent extends React.Component {
  constructor(props){
    super(props);
    this.getProfile = this.getProfile.bind(this);
    this.state = {
      new_profile: {}
    }

  }

  getProfile(dataFromThumbs){
    this.setState({
      new_profile: dataFromThumbs
    })
  }

  render() {
    const new_profile = {}
    return (
      <div>
      <div className="lgContainer">
          <Info new_profile={this.state.new_profile}/>
        </div>
          <div className="container">
              <Thumbs callbackFromParent={this.getProfile}/>
      </div>
      </div>
      );
  }
}
