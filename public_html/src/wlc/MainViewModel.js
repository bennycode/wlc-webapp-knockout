var wlc = wlc || {};

wlc.MainViewModel = (function() {

  function Module($viewContext) {
    this.$viewContext = $viewContext;
    this.host = 'http://localhost:8080/wlc-webapp/rest/fhb';
    this.categories = ko.observableArray([]);
    this.playlists = ko.observableArray([]);
    this.pageTitle = ko.observable('Informatik Tutorials');
  }

  Module.prototype.init = function() {
    ko.applyBindings(this, this.$viewContext.get(0));
  };

  Module.prototype.clickOnCategory = function(category) {
    this.pageTitle(category.name);
    this.showPlaylists(category);
  };

  Module.prototype.showCategories = function() {
    var self = this;

    $.getJSON(this.host + '/v1/categories', function(data) {
      self.categories(data);
      $('.page').removeClass('on');
      $('#categories').addClass('on');
    });
  };

  Module.prototype.showPlaylists = function(category) {
    var self = this;

    window.location.hash = category.name.slug();

    $('.page').removeClass('on');
    $('#playlist').addClass('on');

    $.getJSON(this.host + '/v1/category/' + category.id, function(data) {
      self.playlists(data);
    });
  };


  return Module;

})();