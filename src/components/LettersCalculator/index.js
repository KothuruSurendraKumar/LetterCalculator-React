// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {
    changeInput: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({changeInput: value})
  }

  render() {
    const {changeInput} = this.state
    return (
      <div className="app-container">
        <div className="image-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="inner">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                placeholder="Enter the phrase"
                type="text"
                onChange={this.onChangeInputPhrase}
                value={changeInput}
              />
            </div>
            <p className="para">No.of letters: {changeInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="pic"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator
