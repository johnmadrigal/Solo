import React, { Component } from 'react';

const InputCard = (props) => {
  const { handleSubmit, handleSubject, currSubject } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSubject} id={currSubject} />
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
