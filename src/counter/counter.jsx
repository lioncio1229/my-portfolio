import React, { Component } from "react";

class Counter extends Component {

  state = {
    tags : ['tag1', 'tag2', 'tag3']
  }

  render()
  {
    return(
      <React.Fragment>
        {this.displayList()}
      </React.Fragment>
    );
  }

  displayList()
  {
    let {tags} = this.state;
    return (tags.length === 0 ? <h1>No list</h1> : 
    <ul>
      { tags.map(tag => <li key={tag}>{tag}</li>) }
    </ul>);
  }

}

export default Counter;
