

require.config({
  baseUrl: 'resources/js/',
  paths: {
    jquery: 'jquery-1.10.2.min',
    'jquery.bootstrap': 'bootstrap.min'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery.bootstrap': {
      deps: ['jquery']
    }
  }
});

define(['jquery', 'underscore', 'backbone', 'app/router/workspace', 'jquery.bootstrap'], function ($, _, Backbone, Workspace) {
  $(function () {
    new Workspace.router();
    Backbone.history.start();
  });
});
