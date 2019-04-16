import React from 'react';

class Timer extends React.Component {
  render() {
    const exp = Math.floor(this.props.remainingTime * 3);
    return (
      <div className='timerText'>
        Legend Bonus
        <br />
        {exp}
      </div>
    );
  }
}

export default Timer;