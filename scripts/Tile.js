import React, { Component } from 'react';

export default class Tile extends Component {

    width = 20;
    height = 20;

    constructor(props) {
        super(props);
        this.state = {
            isPicked: this.props.value === 1 ? true : false
        };
    }

    onClickHandler() {
        var isPickedLocal = !this.state.isPicked;
        this.setState({isPicked: isPickedLocal});
        this.props.stateChanged(this.props.position, isPickedLocal ? 1 : 0);
    }

    render() {
        var styles = {
            left: this.props.position.x * this.width + 'px',
            top: this.props.position.y * this.height + 'px',
            width: this.width + 'px',
            height: this.height + 'px'
        };

        return (
            <div
                className={this.state.isPicked ? 'tile picked' : 'tile'}
                style={styles}
                onClick={this.onClickHandler.bind(this)} >
            </div>
        );
    }
}
