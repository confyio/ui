import Orgs from 'confy/routes/orgs/index';
import Pages from 'confy/routes/pages/index';

export default Backbone.Router.extend({
  initialize: function (options) {
    this.route('', Pages.landing);

    this.route('orgs', Orgs.index);
  }
});
