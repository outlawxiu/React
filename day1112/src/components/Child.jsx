import React, { Component } from "react";
import withPos from "./withPos";

export default withPos(
  class Child extends Component {
    render() {
      console.log(this.props);
      return <div>
        pos:{JSON.stringify(this.props.pos)}
      </div>;
    }
  }
);
