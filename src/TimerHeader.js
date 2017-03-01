import React from 'react';

class TimerHeader extends React.Component {
    render() {
        return (
        <div className='timerHeader'>
            <h1 className='timerTitle'>{this.props.value}</h1>
        </div>
        );
    }
}

export default TimerHeader;