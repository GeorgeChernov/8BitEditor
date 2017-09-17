import React, { Component } from 'react';
import MatrixHelper from './MatrixHelper'
import Tile from './Tile'

export default class Grid extends Component {

    matrixHelper = null;

    constructor(props) {
        super(props);
        this.state = {};
        this.matrixHelper = new MatrixHelper();
    }

    renderTile(matrixElement) {
        return <Tile
            position={matrixElement.position}
            value={matrixElement.value}
            key={this.getKey(matrixElement)}
            stateChanged={this.stateChangedHandler.bind(this)} />
    }

    getKey(matrixElement) {
        return matrixElement.position.x + '_' + matrixElement.position.y;
    }

    stateChangedHandler(position, value) {
        var element = {
            position: position,
            value: value
        };
        var newMatrix = this.matrixHelper.updateElement(this.props.matrix, element);

        this.props.matrixChanged(newMatrix);
    }

    render() {
        return (
            <div className="gid">
                {this.matrixHelper.matrixToArray(this.props.matrix).map(this.renderTile.bind(this))}
            </div>
        );
    }
}
