import React , { Component } from 'react';
import * as itemActions from './actions/itemActions';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { getItem } from "./selectors";

class Item extends Component {
    constructor(props,context){
        super(props,context);
        this.toggleItem = this.toggleItem.bind(this);
    }
    toggleItem(){
        this.props.actions.toggleItem(this.props.id);
    }
    render(){
        const { name , selected } = this.props;
        return (
            <div className={`Item ${selected && 'Selected'}`} onClick={this.toggleItem} >
                <div className="ItemName">
                    {name}
                </div>
            </div>
        );
    }
}

export default connect(
    (state,props) => getItem(state,props.id), //mapStateToProps 
    dispatch => ({actions: bindActionCreators(itemActions, dispatch)}) //mapDispatchToProps
)(Item);