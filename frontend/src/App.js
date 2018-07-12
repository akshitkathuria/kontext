import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Map from './components/Map/Map';
import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List'

class App extends Component {

    constructor() {
        super();
        this.state = { twit: [], selectedTwit: null };
        this.props = { twit: [] };
        this.twitSearch = this.twitSearch.bind(this);
        this.twitSearch("akshitdaphnis");
    }

    twitSearch(term) {
        axios.get(`http://localhost:3030/search?text=${term}`)
            .then((response) => {
                this.setState({ twit: response.data.statuses, selectedTwit: response.data.statuses[0] });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">KONTEXT TASK</h1>
                    <SearchBar style={{ color: 'black' }} onSearchTermChange={term => this.twitSearch(term)} />
                </header>
                <p className="App-intro"></p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <List onTwitSelect={selectedTwit => this.setState({ selectedTwit })} twit={this.state.twit} />
                        </div>
                        <div className="col-md-6">
                            <Map selectedTwit={this.state.selectedTwit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
