require(['app', 'jquery'], function (App, $) {
  $(document).ready(function () {
    var app = new App();

    window.app = app;
  });
});
