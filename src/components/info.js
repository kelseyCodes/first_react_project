import React from 'react';
import {Gallery} from './gallery.js';

export class Info extends React.Component {
  constructor(props){
    super(props)
    this.state = {lgImages: [
      {id: 0, img: require('../profile_images/profile0.jpg'), name: 'AristoCat', description: 'Lorem ipsum dolor amet flannel mustache synth church-key squid.'},
      {id: 1, img: require('../profile_images/profile1.jpg'), name: 'Hipsta \'rich', description: 'Microdosing taxidermy polaroid mixtape. Ad sartorial ex, cillum lorem street art edison bulb scenester.'},
      {id: 2, img: require('../profile_images/profile2.jpg'), name: 'LlamaTalk AboutIt', description: 'Photo booth wayfarers gochujang scenester minim marfa adipisicing occaecat taxidermy live-edge vegan dreamcatcher.'}]}
 
  }

  updateLgImages(new_profile){
    // for making a better image, I experimented with using unshift
    // to push the new image to the beginning of the array
    // which would be positioned off the page, then brought in via CSS
    // then, I would pop off the fourth element after the animation 
 
    if([this.state.lgImages[0].id, this.state.lgImages[1].id, this.state.lgImages[2].id].indexOf(new_profile.id)== -1){
      const prev_images = this.state.lgImages;
      const new_images = [new_profile, prev_images[0], prev_images[1]]
      this.setState({
        lgImages: new_images
      })
    }
  }


 componentWillReceiveProps(nextProps){
    this.updateLgImages(nextProps.new_profile)
  }

  render(){
    return <Gallery images={this.state.lgImages} />
  }

}
