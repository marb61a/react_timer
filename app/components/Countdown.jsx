var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState : function(){
        return {
            count : 0,
            countdownStatus : 'stopped'
        };
    },
    
    componentDidUpdate : function(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }    
        }    
    },
    
    componentWillUnmount : function(){
        clearInterval(this.timer);
        this.timer = undefined;
    }
});