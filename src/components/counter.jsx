import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0
    };

    render() { 
        return (
            <div> 
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count ? "primary" : "warning";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;