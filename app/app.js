import Router from 'confy/router';

window.App = new Router();

Backbone.history.start();

// Landing page code samples
jQuery('#usage-tabs a').click(function (e) {
  e.preventDefault();

  var lang = jQuery(this).attr('value');

  jQuery('#usage-tabs li').removeClass('active');
  jQuery('#usage #package div').removeClass('active');
  jQuery('#usage #code div').removeClass('active');

  jQuery('#usage-tabs #' + lang).addClass('active');
  jQuery('#usage #package #' + lang).addClass('active');
  jQuery('#usage #code #' + lang).addClass('active');
});

export default window.App;
