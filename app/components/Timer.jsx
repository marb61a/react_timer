var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState : function(){
        return {
            count : 0,
            timerStatus : 'stopped'
        };
    },
    
    componentDidUpdate : function(prevProps, prevState){
        if(this.state.timerStatus !== prevState.timerStatus){
            switch(this.state.timerStatus){
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }    
        }    
    }
})