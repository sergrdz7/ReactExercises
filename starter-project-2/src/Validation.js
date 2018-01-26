import React from 'react';

const Validation = (props) => {

  //validation logic
 return (
    <div>
      {props.length>5 ?
        <p>Text long engough</p> :
        <p>Text too short!</p>}
    </div>
  )
}

export default Validation;
