import React, { Component } from 'react'
import _ from 'lodash'
import LetterButton from './LetterButton'
import Snowman from './Snowman'
import Word from './Word'
import PlayAgainButton from './PlayAgainButton.js'

// ALPHABET is an array of 26 letters, 'a' through 'z', i.e. ['a', 'b', 'c', ...'z']
const ALPHABET = _.range(26).map(i => String.fromCharCode(i + 97))

// WORDS is an array of 1024 different seven letter words
const WORDS = require('raw!../wordList.txt').trim().split('\n')

class App extends Component {

  constructor () {
    super()
    this.state = {
      guesses: [],
      matched: [],
      word: _.sample(WORDS)
    }
  }

  choose (letter) {
    const { word, guesses, matched } = this.state
    if (guesses.includes(letter)) return
    this.setState({guesses: guesses.concat(letter)})
    if (word.split('').includes(letter)) {
      this.setState({matched: matched.concat(letter)})
      this.points
    }
  }

  reset = () => {
    this.setState({
      guesses: [],
      matched: [],
      word: _.sample(WORDS)
    })
  }

  get points () {
    const { word, matched } = this.state
    return (word.length - word.split('').filter(p => !matched.includes(p)).length)
  }

  render () {
    const letters = ALPHABET.map((character, i) => {
      return <LetterButton value={ALPHABET[i]}
        onChoose={() => this.choose(ALPHABET[i])}
        disabled={this.state.guesses.includes(ALPHABET[i])}
        index={i}
        key={i}
      />
    })

    return <div className='app'>
      <main>
        <Snowman step={this.points} size={400} />
        <Word value={this.state.word} guesses={this.state.guesses} />
        <div className='keyboard'>
          {letters}
        </div>
        <PlayAgainButton reset={this.reset} />
      </main>
      <footer>It's like hangman, but, um... backwards or something.</footer>
    </div>
  }
}

export default App
