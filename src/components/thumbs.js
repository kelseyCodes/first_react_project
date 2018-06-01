import React from 'react';
import {Thumbnail} from './thumbnail.js'

export class Thumbs extends React.Component {
  constructor(props){
    super(props)
    this.receiveData = this.receiveData.bind(this);

    this.state = {images: [
      {id: '3', img: require('../profile_images/profile3.jpg'), name: 'Suspenders McGee', description: 'Ipsum stumptown hot chicken put a bird on it.'},
      {id: '4', img: require('../profile_images/profile4.jpg'), name: 'Koala Deville', description: 'Letterpress hell of succulents, iPhone viral art party brooklyn etsy chia yr paleo fashion axe hot chicken neutra. '},
      {id: '5', img: require('../profile_images/profile5.jpg'), name: 'Racoon YouToo', description: 'Officia est whatever, occaecat vape sint messenger bag umami ipsum skateboard excepteur helvetica readymade.'},
      {id: '6', img: require('../profile_images/profile6.jpg'), name: 'Suity Fruity', description: 'Glossier photo booth ea dolore, offal bushwick sunt literally.'},
      {id: '7', img: require('../profile_images/profile7.jpg'), name: 'Lions Share', description: 'Chicharrones air plant retro in next level banjo vexillologist kombucha bespoke godard asymmetrical master cleanse occaecat green juice.'},
      {id: '8', img: require('../profile_images/profile8.jpg'), name: 'Chubbs', description: 'Messenger bag hot chicken microdosing, chillwave pickled copper mug occupy cillum church-key sed street art ipsum listicle tofu meggings.'},
      {id: '9', img: require('../profile_images/profile9.jpg'), name: 'Token Hipster', description: 'Yr ex hoodie celiac excepteur tbh ennui cillum heirloom eiusmod hot chicken everyday carry chambray tousled tempor. '},
      {id: '10', img: require('../profile_images/profile10.jpg'), name: 'Suddzy', description: 'Pug 8-bit sriracha chia subway tile literally minim lo-fi vinyl authentic lumbersexual mixtape. '},
      {id: '11', img: require('../profile_images/profile11.jpg'), name: 'Artista Beaumont', description: 'Sint farm-to-table mixtape cupidatat. '},
      {id: '12', img: require('../profile_images/profile12.jpg'), name: 'Lost Kitty', description: 'Scenester meditation drinking vinegar glossier unicorn ut yr, subway tile fugiat excepteur aliqua tumblr ugh taxidermy. '},
      {id: '13', img: require('../profile_images/profile13.jpg'), name: 'Giraffe Terme', description: 'Et blue bottle food truck four dollar toast kinfolk small batch af art party, plaid XOXO culpa stumptown try-hard heirloom.'},
      {id: '14', img: require('../profile_images/profile14.jpg'), name: 'Hot Charles', description: 'Mumblecore ugh ad reprehenderit quis helvetica, fixie kitsch.'},
      {id: '15', img: require('../profile_images/profile15.jpg'), name: 'For Goatit', description: 'Godard portland tousled subway tile gochujang brooklyn ut banjo letterpress drinking vinegar actually pok pok ullamco est wayfarers.'},
      {id: '16', img: require('../profile_images/profile16.jpg'), name: 'Pandar Ring', description: 'Tote bag activated charcoal nulla scenester taxidermy wolf cardigan.'},
      {id: '17', img: require('../profile_images/profile17.jpg'), name: 'Bruce Jr', description: 'IPhone enamel pin polaroid listicle fanny pack.'},
      {id: '18', img: require('../profile_images/profile18.jpg'), name: 'Bowt Time', description: 'Fugiat blue bottle proident hella brooklyn, plaid jean shorts dolor farm-to-table banjo food truck dolore shoreditch.'},
      {id: '0', img: require('../profile_images/profile0.jpg'), name: 'AristoCat', description: 'Lorem ipsum dolor amet flannel mustache synth church-key squid.'},
      {id: '1', img: require('../profile_images/profile1.jpg'), name: 'Hipsta \'rich', description: 'Microdosing taxidermy polaroid mixtape. Ad sartorial ex, cillum lorem street art edison bulb scenester.'},
      {id: '2', img: require('../profile_images/profile2.jpg'), name: 'LlamaTalk AboutIt', description: 'Photo booth wayfarers gochujang scenester minim marfa adipisicing occaecat taxidermy live-edge vegan dreamcatcher.'}
      ]
    };
  } 

receiveData(dataFromThumbnail) {
    const image_id = dataFromThumbnail;
      this.props.callbackFromParent(this.state.images.filter(profile => profile.id === image_id)[0])
}


  render() {
  	const images = [];

    this.state.images.forEach(function(data){
      images.push(data)
    })

  	const image_thumbs = images.map((data, index) => {
    	return <Thumbnail callbackFromThumbs={this.receiveData} id_src={data.id} desc_src={data.description} name_src={data.name} image_src={data.img} key={index} />
  	})
    
    return image_thumbs
}
}