import React, { Component } from 'react';
import axios from 'axios';

const InputCard = (props) => {
  return (
    <div>
      <h3>Enter Movie or Actor</h3>
      <form onSubmit={props.handleSubmit}>
        <input type="text" />
      </form>
    </div>
  );
};

// class InputCard extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     data: {},
//   //   };
//   // }

//   // handleSubmit() {
//   //   axios
//   //     .get('/movies')
//   //     .then((data) => {
//   //       this.setState(data);
//   //     })
//   //     .catch((err) => this.setState(err));
//   // }

//   render() {

//   }
// }

export default InputCard;
