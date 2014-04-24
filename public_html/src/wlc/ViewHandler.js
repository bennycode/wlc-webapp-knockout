var wlc = wlc || {};

wlc.ViewHandler = (function() {

  function Module($viewContext) {
    this.$viewContext = $viewContext;
    this.selectors = {
      categoryPage: '#categories',
      playlistPage: '#playlist',
      videoPage: '#videos'
    };
  }

  Module.prototype.init = function() {
    ko.applyBindings(wlc.MainViewModel, this.$viewContext.get(0));
  };

  Module.prototype.showPlaylist = function() {
    $(".pages", $viewContext)
            .not(this.selectors.playlistPage)
            .css("display", "none");
  };

  return Module;

})();