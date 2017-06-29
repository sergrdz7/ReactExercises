import React, {Component} from 'react';

//getProfile

class Search extends Component{

  submit(event){
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    // this.refs.username.value = '';
  }

  render(){
    return(
      <div className="search-box">
        <form onSubmit={this.submit.bind(this)}>
          <lable>
            <input type="search" ref="username" placeholder="type a username"/>

          </lable>
        </form>
      </div>
    );
  }
}

export default Search;
