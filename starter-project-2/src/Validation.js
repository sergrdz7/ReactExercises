import React from 'react';

const Validation = (props) => {

  //validation logic
  let validationMessage = 'Text long enough';

  if (props.length <= 5) {
    validationMessage = 'Text too short';
  }

 return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
}

export default Validation;
