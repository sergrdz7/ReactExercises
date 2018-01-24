import React from 'react';

const Validation = (props) => {

  //validation logic

  if (props.length < 5){
    return (
      <div>
        <p>Text too short</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>Text is long enough</p>
      </div>
    )
  }
}

export default Validation;
