import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
var GoogleMapsLoader = require('google-maps'); // only for common js environments
 
GoogleMapsLoader.load(function(google) {
    new google.maps.Map(el, options);
});
GoogleMapsLoader.KEY = 'qwertyuiopasdfghjklzxcvbnm';
GoogleMapsLoader.CLIENT = 'yourclientkey';
GoogleMapsLoader.VERSION = '3.14';
GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
GoogleMapsLoader.LANGUAGE = 'fr';
GoogleMapsLoader.REGION = 'GB';
// GoogleMapsLoader.release(function() {
//     console.log('No google maps api around');
// });
// GoogleMapsLoader.onLoad(function(google) {
//     console.log('I just loaded google maps api');
// });
class GoogleMap extends Component {
  state = {
  };
  
  render() {
    return (
      <div>
      
      </div>
    );
  }
}
export default GoogleMap;
