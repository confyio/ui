export default Ember.RESTAdapter.create({
  ajaxSettings: function(url, method) {
    return {
      url: window.ENV.BASE_URL + '/orgs/' + window.ORG + '/projects/' + window.PROJECT + url.slice(0, -5),
      type: method,
      dataType: 'json'
    };
  }
});
