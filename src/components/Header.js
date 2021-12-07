import { Component } from 'react';
import SearchBar from './SearchBar.js';

class Header extends Component {
    render() {
        return(
            <>
                <h1> Header </h1>
                <SearchBar locQryUpdt={this.props.locQryUpdt}/>
            </>
        )
    }
}

export default Header;