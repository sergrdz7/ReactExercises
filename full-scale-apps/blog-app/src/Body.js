import React, { Component } from 'react';
import Postpreview from './Postpreview';

class Body extends Component {
  render(){
    return(
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <Postpreview />
                  <hr />
                  <Postpreview />
                  <hr />
                  <Postpreview />
                  <hr />
                  <Postpreview />
                  <hr />
                  <ul className="pager">
                      <li className="next">
                          <a href="#">Older Posts &rarr;</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

export default Body;
