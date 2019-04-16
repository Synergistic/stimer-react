import React from 'react';
import './App.css'
import TimerHeader from './TimerHeader'
import TimerControls from './TimerControls'
import Timer from './Timer'
import Info from './Info'


class TimerContainer extends React.Component {
    componentWillUnmount() {
        clearInterval(this.timer);
    };

    constructor(props) {
        super(props);
        this.state = {
            timer: {
                elapsedSeconds: 0,
                startTime: Date.now(),
            }
        };
        this.timer = setInterval(() => this.tick(), 50);
    }

    handlePlayClick = () => {
        this.startTimer();
    }

    handlePauseClick = () => {
        this.stopTimer();
    }

    startTimer = () => {
        this.setState(
            {
                timer: Object.assign({}, this.state.timer, {
                    startTime: Date.now()
                })
            });
    }
    stopTimer = () => {
        this.setState(
            {
                timer: Object.assign({}, this.state.timer, {
                    startTime: null
                })
            });
    }

    tick = () => {
        if (!this.state.timer.startTime) {
            return;
        }
        let elapsedMilliseconds = Date.now() - this.state.timer.startTime;
        let elapsedSeconds = elapsedMilliseconds / 1000;
        let newTimer = {
            elapsedSeconds: elapsedSeconds,
        };
        this.setState({
            ...this.state, elapsedSeconds: elapsedSeconds
        })
        return;
    }

    render() {
        return (
            <div className='container'>
                <TimerHeader
                    value={this.state.timer.title}
                />
                <hr />
                <Timer
                    remainingTime={this.state.elapsedSeconds}
                />
                <TimerControls
                    onPauseClick={this.handlePauseClick}
                    onPlayClick={this.handlePlayClick}
                    timer={this.state.timer}
                />
            </div>);
    }
}

export default TimerContainer;