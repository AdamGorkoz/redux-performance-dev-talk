import React , { Component } from 'react';
import { connect } from "react-redux";
import * as itemActions from './actions/itemActions';
import { bindActionCreators } from 'redux';
import css from '../App.css'

import { getItems } from "./selectors";
import Item from './Item';

class App extends Component {
    render(){
        const { items , actions } = this.props;
        return (
            <div className="App">
                {items.map(item => <Item key={item.id} {...item} toggleItem={actions.toggleItem} />)}
            </div>
        );
    }
}

export default connect(
    state => ({items : getItems(state)}), //mapStateToProps
    dispatch => ({actions: bindActionCreators(itemActions, dispatch)}) //mapDispatchToProps
)(App);