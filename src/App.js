import React from 'react';
import "./App.css"

class Board extends React.Component {

  constructor(props) {    
    super(props);
  }

  _renderSquare(i) {
    return <Square value={i} />
  }

  render() {

    const status = "Next player: X"

    return (
      <div>
        <div className="status"> { status } </div>
        <div className="boardRow">
          { this._renderSquare(0) }
          { this._renderSquare(1) }
          { this._renderSquare(2) }
        </div>
        <div className="boardRow">
          { this._renderSquare(3) }
          { this._renderSquare(4) }
          { this._renderSquare(5) }
        </div>
        <div className="boardRow">
          { this._renderSquare(6) }
          { this._renderSquare(7) }
          { this._renderSquare(8) }
        </div>
      </div>
    )
  }

}

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

export default Board
