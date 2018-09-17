import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {
        podatci: [],
        kralj: {},
        SongText: '',
        ucitaniPodaci: false
    }


    componentDidMount() {

        this.proba();
    }

    proba() {
        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${this.state.SongText}&page_size=3&page=1&s_track_rating=desc`, {
            params: {
                apikey: 'e4de8d76db968f3f531a30e734222090',
                //q_artist: "Ceca",
                format: "json",
            }
        }).then(response => {
            this.setState({
                ...this.state,
                podatci: response.data.message.body.track_list,
                ucitaniPodaci: true
            }, () => {
            });
        })
    }

    onChangeHandler(e) {
        this.setState({
            ...this.state,
            SongText: e.target.value
        }, () => {

            this.proba();
        })
    }
    render() {
        console.log(this.state);
        var nesto = this.state.podatci.map(a => {
            return (<p>{a.track.artist_name}</p>)
        })
        if (this.state.ucitaniPodaci === false) {
            return <p>Loading...</p>
        } else {
            return (

                <div>
                    <input type="text" value={this.state.SongText} onChange={this.onChangeHandler.bind(this)}></input>
                    {nesto}
                </div >
            );
        }
    }
}

export default Blog;