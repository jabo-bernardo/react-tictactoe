import React from 'react';
import "./App.css"
class Board extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  _handleClick(i) {
    const squares = this.state.squares.slice();
    if(_defineWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState(
      { 
        squares: squares,
        xIsNext: !this.state.xIsNext
      }
    )
  }

  _renderSquare(i) {
    return ( 
      <Square 
        value={this.state.squares[i]}
        onClick={() => this._handleClick(i)}
      />
    )
  }

  render() {
    const winner = _defineWinner(this.state.squares);
    let status = '';
    if(winner) {
      status = `Winner ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

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

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

function _defineWinner(squares) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let l = 0; l < winnerLines.length; l++) {
    let [a, b, c] = winnerLines[l];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board
