export default Ember.RESTAdapter.create({
  ajaxSettings: function(url, method) {
    return {
      url: window.ENV.BASE_URL + '/user',
      type: method,
      dataType: 'json'
    };
  }
});
