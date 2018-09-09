import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    //let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
//fi rst 56:32 https://www.youtube.com/watch?v=Ke90Tje7VS0
