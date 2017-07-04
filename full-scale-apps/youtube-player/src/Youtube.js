import React, { Component } from 'react';


//APIKEY = AIzaSyAUWZ8dwqhF6mNtJzHPevpZ6IruA5XgCyU
// https://www.googleapis.com/youtube/v3/search?part=snippet?channelID=
const API = 'AIzaSyAUWZ8dwqhF6mNtJzHPevpZ6IruA5XgCyU';
const channelID= 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 10;
//https://www.googleapis.com/youtube/v3/search?part=snippet&channelID=UCXgGY0wkgOzynnHvSEVmE3A&key=AIzaSyAUWZ8dwqhF6mNtJzHPevpZ6IruA5XgCyU&maxResult=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelID=${channelID}&key=${API}&maxResult=${result}`;

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      youTubeResults: []
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(){
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseText) => {
        const youTubeResults = responseText.items.map(obj => 'https://www.youtube.com/embed/'+obj.id.videoId);
        this.setState({ youTubeResults: youTubeResults });

        console.log(this.state.youTubeResults);

    })
      .catch((error) => {
      console.warn(error);
    });
  }

  render(){
    // console.log(finalURL);
    console.log(this.state.youTubeResults);
    return(
      <div>
        {
          //Map through all the links inside the state and display an iframe for each
          this.state.youTubeResults.map((url, i) => {
            console.log(url);
            var frame = <div key={i} className='youtube'><iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe></div>
            return frame;
        })
        }

        {this.frame}
        {
        //<input type="number" name="number" placeholder="0" min="1" max="10" />
        }
        <button onClick={this.clicked}>Get Videos</button>
      </div>
    );
  }
}

export default Youtube;
