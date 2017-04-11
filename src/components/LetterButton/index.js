import React, { Component } from 'react'
import cx from 'classnames'

class LetterButton extends Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    onChoose: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
  }

  render () {
    const { matched } = this.props
    return <button
      className={cx('letter-button', {matched})}
      onClick={this.props.onChoose}
      disabled={this.props.disabled}>
      {this.props.value}
    </button>
  }
}

export default LetterButton
