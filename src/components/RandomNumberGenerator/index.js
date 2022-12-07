import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  onClickButton = () => {
    const updatedRandom = Math.ceil(Math.random() * 100)
    this.setState({
      randomNo: updatedRandom,
    })
  }

  render() {
    const {randomNo} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="random">{randomNo}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
