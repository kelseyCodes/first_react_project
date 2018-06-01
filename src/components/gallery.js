import React from 'react';
import {Profile} from './profile.js'

export class Gallery extends React.Component {
  render() {
      const lgImages = this.props.images;
     return (
          <div>
            <Profile image_src={lgImages[0].img} desc_src={lgImages[0].description} name_src={lgImages[0].name} key='0' />
            <Profile image_src={lgImages[1].img} desc_src={lgImages[1].description} name_src={lgImages[1].name} key='1' />
            <Profile image_src={lgImages[2].img} desc_src={lgImages[2].description} name_src={lgImages[2].name} key='2' />
          </div>
        )
  }
}