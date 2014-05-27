import OrgsRoute from 'confy/routes/orgs/index';
import PagesRoute from 'confy/routes/pages/index';

export default Backbone.Router.extend({
  initialize: function (options) {
    this.route('', PagesRoute.landing);

    this.route('orgs', OrgsRoute.list);
    this.route('orgs/:org', OrgsRoute.view);
  }
});
