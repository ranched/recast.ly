class App extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
      
    };
  }

  updateVideos = (responseVideos) => {
    console.log('running')
    this.setState({videos: responseVideos});
  }
  
  selectVideo(video) {
    this.setState({currentVideo: video});
  }

  
  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">      
          <Search updateVideo={this.updateVideos}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList select={this.selectVideo.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


//ReactDOM.render(<VideoList videos={window.exampleVideoData}/>, document.getElementsByClassName('video-list'));
//ReactDOM.render(<VideoPlayer video={window.exampleVideoData}/>, document.getElementsByClassName('video-player'));
