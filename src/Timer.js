import React from 'react';

class Timer extends React.Component {
    render() {
        const remainingString = this.millisecondsToHuman(this.props.remainingTime);
        return(
        <div className='timerText'>
            {remainingString}                  
        </div>
        );
    }

    millisecondsToHuman = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);

    const humanized = [
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }
  pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
}

export default Timer;