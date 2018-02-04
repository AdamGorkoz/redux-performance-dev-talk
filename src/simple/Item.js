import React , { Component } from 'react';

class Item extends Component {
    constructor(props,context){
        super(props,context);
        this.toggleItem = this.toggleItem.bind(this);
    }
    toggleItem(){
        this.props.toggleItem(this.props.id);
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

export default Item;