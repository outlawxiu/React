import React from "react";

function withPos(Component) {
  class posHoc extends React.Component {
    state = {
      pos: {
        x: "",
        y: "",
      },
    };

    mousemove = (e) => {
      this.setState({
        pos: {
          x: e.pageX,
          y: e.pageY,
        },
      });
    };

    componentDidMount() {
      document.addEventListener("mousemove", this.mousemove);
    }

    componentWillUnmount() {
      document.removeEventListener("mousemove", this.mousemove);
    }

    render() {
      return (
        <div>
          <h1>高阶组件修改后</h1>
          <Component pos={this.state.pos} {...this.props}></Component>
        </div>
      );
    }
  }

  return posHoc;
}

export default withPos;
