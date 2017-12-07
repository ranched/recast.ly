var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,

    success: function(data) {
      console.log('success')
      callback(data.items);
    }
    
  });
};

window.searchYouTube = searchYouTube;
