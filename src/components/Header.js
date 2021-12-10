import { Component } from 'react';
import SearchBar from './SearchBar.js';

class Header extends Component {
    render() {
        return(
            <>
                <h1> Location Viewer </h1>
                <SearchBar locQryUpdt={this.props.locQryUpdt} resetState={this.props.resetState}/>
            </>
        )
    }
}

export default Header;