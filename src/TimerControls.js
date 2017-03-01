import React from 'react';

class TimerControls extends React.Component {
    render() {
        let middleControl = (<span />);
        if (this.props.timer.remainingTime > 999) {
            if (this.props.timer.startTime) {
                middleControl = (
                    <i
                        className="fa fa-pause fa-2x"
                        aria-hidden="true"
                        onClick={this.props.onPauseClick}>
                    </i>);
            }
            else {
                middleControl = (
                    <i className="fa fa-play fa-2x"
                        aria-hidden="true"
                        onClick={this.props.onPlayClick}>
                    </i>);
            }
        }

        return (
            <div className='controls'>

                {middleControl}
                <i
                    className="fa fa-step-forward fa-2x"
                    aria-hidden="true"
                    onClick={this.props.onSkipClick}>
                </i>
            </div>
        );
    }
}

export default TimerControls;