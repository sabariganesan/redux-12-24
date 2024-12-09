import React, { Component } from "react";
import { connect } from "react-redux";

class ComponentFour extends Component {
  constructor(props) {
    super(props);
  }

  handleDecrement() {
    this.props.decrement();
  }

  render() {
    return (
      <li>
        <span>
          {" "}
          Comp - Class - 4 - count Value - {this.props.count}{" "}
          <button onClick={this.handleDecrement.bind(this)}>-</button>
        </span>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.auth.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrement: () => dispatch({ type: "DEC" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentFour);
