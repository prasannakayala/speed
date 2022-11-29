// Write your code here
import {components} from 'react'
import './index.css'

class Speedometer extends components {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onBreak = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="img"
        />
        <h2 className="sub-heading">Speed is {speed}mph</h2>
        <p className="info">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button className="break-btn" onClick={this.onBreak} type="button">
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
