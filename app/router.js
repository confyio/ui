import PagesRoute from 'confy/routes/pages/index';
import OrgsRoute from 'confy/routes/orgs/index';
import ProjectsRoute from 'confy/routes/projects/index';

export default Backbone.Router.extend({
  initialize: function (options) {
    this.route('', PagesRoute.landing);

    this.route('orgs', OrgsRoute.list);
    this.route('orgs/:org', OrgsRoute.view);

    this.route('orgs/:org/projects', ProjectsRoute.list);
    this.route('orgs/:org/projects/:project', ProjectsRoute.view);
  }
});
