import React from 'react';

const useroutput = (props) => {
  return(
    <div>
      <p>Username: </p>
      <p>Current User: {props.user}</p>
    </div>
  )
}

export default useroutput;
