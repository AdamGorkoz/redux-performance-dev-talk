import React , { Component } from 'react';
import { connect } from "react-redux";
import css from '../App.css'

import { getItemIds } from "./selectors";
import Item from './Item';

class App extends Component {
    render(){
        const { itemIds } = this.props;
        return (
            <div className="App">
                {itemIds.map(itemId => <Item key={itemId} id={itemId} />)}
            </div>
        );
    }
}

export default connect(
    state => ({itemIds : getItemIds(state)}) //mapStateToProps
)(App);