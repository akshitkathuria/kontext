import React, { Component } from 'react';

/* const SearchBar = () => {
    return <input />
}; */

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { text: ' ' }
    }

    onInputChange(text) {
        this.setState({ text });
        this.props.onSearchTermChange(text);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-group">
                            <input className="form-control" onChange={event => this.onInputChange(event.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;