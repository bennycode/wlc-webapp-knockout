var wlc = {
  settings: {
    elementId: 'app',
    host: 'http://localhost:8080/wlc-webapp/rest/fhb'
  },
  viewModel: {
    pageTitle: ko.observable('Informatik Tutorials'),
    categories: ko.observableArray([]),
    clickOnCategory: function(category) {
      vm.pageTitle(category.name);
    }
  },
  init: function() {
    var self = this;

    ko.applyBindings(
            this.viewModel,
            document.getElementById(this.settings.elementId));

    $.getJSON(this.settings.host + '/v1/categories', function(data) {
      self.viewModel.categories(data);
    });
  }
};

wlc.init();
vm = wlc.viewModel;