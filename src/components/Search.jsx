var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" id="searchText" type="text" />
    <button className="btn hidden-sm-down" onClick={ () => (window.searchYouTube({max: 5, 
    key: window.YOUTUBE_API_KEY, 
    query: document.getElementById('searchText').value, part: 'snippet'}, () => (props.updateVideo)))}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
