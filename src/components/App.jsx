class App extends React.Component {
  
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7 video-player">
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        <div className="video-list col-md-5">
          <div><h5><em>videoList</em> view goes here</h5></div>
        </div>
      </div>
    </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


ReactDOM.render(<VideoList videos={window.exampleVideoData}/>, document.getElementsByClassName('video-list'));
ReactDOM.render(<VideoPlayer />, document.getElementsByClassName('video-player'));
