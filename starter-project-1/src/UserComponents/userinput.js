import React from 'react';

const userinput = (props) => {
  return(
    <div>
      <input type="Text" onChange={props.changeUser} value={props.user}></input>
    </div>
  )
};

export default userinput;
