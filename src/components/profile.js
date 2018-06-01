import React from 'react';


export class Profile extends React.Component {
  render() {
    return (
      <div className='profile'>
        <div className='imgDiv'>
          <img className='lgImage' src={this.props.image_src} alt=''/>
        </div>
        <div className='nameDiv'>
          <h3 className='name'> {this.props.name_src}</h3>
        </div>
        <div className='description'>
          <p>{this.props.desc_src}</p>
         </div>
      </div>
      );
  }
}
