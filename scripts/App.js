import React, { Component } from 'react';
import Grid from './Grid'
import MatrixHelper from './MatrixHelper'


export default class App extends Component {

  matrixHelper = null;

  constructor(props) {
    super(props);
    this.matrixHelper = new MatrixHelper();
    this.state = {
      matrix: this.matrixHelper.getEmptyMatrix(18, 22)
    };
  }

  matrixChangedHandler(newMatrix) {
    this.setState({ matrix: newMatrix });
  }

  matrixToString(matrix) {
    return matrix.toString();
  }

  render() {
    return (
      <div className="main-container">
        <Grid matrix={this.state.matrix} matrixChanged={this.matrixChangedHandler.bind(this)} />
        <div className="export">
          <textarea readOnly value={this.matrixToString(this.state.matrix)} />
        </div>
      </div>
    );
  }
}
