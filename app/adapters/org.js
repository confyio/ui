export default Ember.RESTAdapter.create({
  ajaxSettings: function(url, method) {
    return {
      url: window.ENV.BASE_URL + url.slice(0, -5),
      type: method,
      dataType: 'json'
    };
  }
});
