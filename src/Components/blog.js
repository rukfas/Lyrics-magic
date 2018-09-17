import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    state = {
        podatci: [],
        kralj: {}

    }


    componentDidMount() {

        //axios.defaults.headers.common['apikey'] = 'e4de8d76db968f3f531a30e734222090';
        axios.get("https://api.musixmatch.com/ws/1.1/track.search?q_lyrics= licna karta&page_size=3&page=1&s_track_rating=desc", {
            params: {
                apikey: 'e4de8d76db968f3f531a30e734222090',
                //q_artist: "Ceca",
                format: "json",
            }
        }).then(response => {
            this.setState({
                podatci: response.data.message.body.track_list
            }, () => {
                this.nesto();
            });
        })

    }

    nesto() {
        console.log(this.state.podatci);
    }
    render() {
        console.log(this.props);
        var nesto = this.state.podatci.map(a => {
            return (<p>{a.track.artist_name}</p>)
        })
        if (this.state.podatci.length < 1) {
            return <p>Loading...</p>
        } else {
            return (

                <div>
                    {nesto}
                </div >
            );
        }
    }
}

export default Blog;