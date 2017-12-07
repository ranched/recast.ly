var searchYouTube = (options, callback) => {
  
  let maxResults = options.max;
  let q = options.query;
  let key = options.key;
  let part = 'snippet';

  let ajaxRequestObject = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { key: key, q: q, maxResults: maxResults, part: part },

    success: function(data) {
      console.log('success');
      callback(data.items);
    }
    
  };  

  $.ajax(ajaxRequestObject);
};

window.searchYouTube = searchYouTube;
