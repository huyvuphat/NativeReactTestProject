import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };  //initializing state

  componentWillMount() {
    // console.log('Component will mount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
    //get the data and set it to state
  }

renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  );
}

render() {
 console.log(this.state);
      return (
      <View>
        {this.renderAlbums()}
       </View>
      );
  }



}
export default AlbumList;
