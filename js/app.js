function Tweet(statusId, screenName, embedData){
  var self = this;
  self.statusId = statusId;
  self.screenName = screenName;
  self.embedData = embedData;
}

function BestTweetSlideshowViewModel(){
  //Data
  var self = this;
  self.tweets = ko.observableArray();
  $.getJSON("./data/tweetData.json", function(json){
    self.setData(json);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error: " + textStatus);
    console.log("json: " + jqXHR.responseText);
  });
  
  self.setData = function(json){
    for(var i = 0; i < json.length; i++ ){
      var data = json[i];
      self.tweets.push(new Tweet(data['id'], data['screenName'], data['embedData']));
    }
    self.startSlideShow();
  };
  
  self.startSlideShow = function(){
    $('.tweets').bxSlider({
      mode: 'fade',
      speed: 4000,
      auto: true,
      autoControls: true,
      ticker: true,
      adaptiveHeight: true,
      slideWidth: 500,
      onSlideBefore: function($slideElement, oldIndex, newIndex){ 
        var screenName = self.tweets()[newIndex].screenName;
        //var bgUrl = 'http://gadgtwit.appspot.com/twbg/' + screenName; 
        var bgUrl = './bg_images/' + screenName;
        $('body').fadeOut(700, function(){
          $('body').css('background-image', 'url(' + bgUrl + ')').fadeIn(700);
        });
      }
    });
  };
}
ko.applyBindings(new BestTweetSlideshowViewModel());
