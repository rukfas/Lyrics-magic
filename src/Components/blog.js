import React, { Component } from 'react';
import axios from 'axios';
import "./blog.css";

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
        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${this.state.SongText}&page_size=10&page=1&s_track_rating=desc`, {
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
            return (<div className="rezultat"><p>{a.track.artist_name}</p></div>)
        })
        if (this.state.ucitaniPodaci === false) {
            return <p>Loading...</p>
        } else {
            return (

                <div className="Blog">
                    <input type="text" value={this.state.SongText} onChange={this.onChangeHandler.bind(this)}></input>
                    {nesto}
                </div >
            );
        }
    }
}

export default Blog;