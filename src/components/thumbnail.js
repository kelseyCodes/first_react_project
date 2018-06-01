import React from 'react';


export class Thumbnail extends React.Component {
  constructor(props) {
  	super(props);
  	this.moveToGallery = this.moveToGallery.bind(this);
  }

  moveToGallery(){
  	this.props.callbackFromThumbs(this.props.id_src);
  }

  render() {
    return <img src={this.props.image_src} alt='' className='thumbnail' onClick={this.moveToGallery}/>;
  }
}
