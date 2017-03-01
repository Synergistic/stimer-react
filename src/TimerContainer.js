import React from 'react';
import './App.css'
import TimerHeader from './TimerHeader'
import TimerControls from './TimerControls'
import Timer from './Timer'
import Info from './Info'


class TimerContainer extends React.Component {

    times = [2700000, 900000];
    titles = ["Work", "Break"];

    componentWillUnmount() {
        clearInterval(this.timer);
    };

    constructor(props) {
        super(props);
        this.state = {
            timer: {
                type: 0,
                remainingTime: this.times[0],
                startTime: null,
                title: this.titles[0]
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

    handleSkipClick = () => {
        const targetType = this.state.timer.type === 0 ? 1 : 0;
        const newTimer = {
            type: targetType,
            remainingTime: this.times[targetType],
            startTime: null,
            title: this.titles[targetType]
        }
        this.setState({ timer: newTimer })
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
        if (!this.state.timer.startTime || this.state.timer.remainingTime <= 999) {
            return;
        }
        const newStartTime = Date.now();
        const elapsed = newStartTime - this.state.timer.startTime;
        const newRemaining = this.state.timer.remainingTime - elapsed;

        let newTitle = this.state.timer.title;
        if(newRemaining < 999){
            newTitle += " over!";
        };

        let newTimer = {
            remainingTime: newRemaining,
            startTime: newStartTime,
            title: newTitle
        };
        this.setState({
            timer: Object.assign({}, this.state.timer, newTimer)
        });
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
                    remainingTime={this.state.timer.remainingTime}
                    startTime={this.state.timer.startTime}
                />
                <TimerControls
                    onPauseClick={this.handlePauseClick}
                    onPlayClick={this.handlePlayClick}
                    onSkipClick={this.handleSkipClick}
                    timer={this.state.timer}

                />
                <Info />
            </div>);
    }
}

export default TimerContainer;