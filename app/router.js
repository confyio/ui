var Router = Backbone.Router.extend({
  routes: {
    "index": "index"
  },
  index: function () {
    console.log('hello');
  }
});

export default Router;
