import React from 'react';

class TimerControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: 'fa-play'
        };
    }

    onPauseClick() {

    }
    render() {
        /*let middleControl = (<span />);
        middleControl = (
            <i className="fa fa-play fa-2x"
                aria-hidden="true"
                onClick={this.props.onPlayClick}>
            </i>);
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
        }*/

        return (
            <div className='controls'>
                <i
                    className="fa fa-pause fa-2x"
                    aria-hidden="true"
                    onClick={this.props.onPauseClick}>
                </i>
                <i className="fa fa-play fa-2x"
                    aria-hidden="true"
                    onClick={this.props.onPlayClick}>
                </i>
            </div>
        );
    }
}

export default TimerControls;