import Pages from 'confy/routes/pages/index';

export default Backbone.Router.extend({
  initialize: function (options) {
    this.route('', Pages.landing);

    this.route('orgs', function () {
      console.log('hello');
    });
  }
});
