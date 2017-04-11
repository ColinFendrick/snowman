import React, { Component } from 'react'

class PlayAgainButton extends Component {
  _click = () => {
    this.props.reset()
  }

  render () {
    return <button className='resetButton' onClick={this._click}>Play Again?</button>
  }

}

export default PlayAgainButton
