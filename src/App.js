import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount() {

    //axios.defaults.headers.common['apikey'] = 'e4de8d76db968f3f531a30e734222090';
    axios.get("https://api.musixmatch.com/ws/1.1/track.search?q_lyrics= licna karta&page_size=3&page=1&s_track_rating=desc", {
      params: {
        apikey: 'e4de8d76db968f3f531a30e734222090',
        //q_artist: "Ceca",
        format: "json",
      }
    })
      .then(function (response) {
        console.log(response.data);
        let myData = response.data
        console.log(typeof (myData));
        let dataa = JSON.stringify(myData);
        let daa = JSON.parse(dataa);
        console.log(daa);
      })
      .catch(function (err) {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
      </div >
    );
  }
}

export default App;