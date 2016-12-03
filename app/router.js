import PagesRoute from 'confy/routes/pages/index';
import OrgsRoute from 'confy/routes/orgs/index';
import ProjectsRoute from 'confy/routes/projects/index';
import TeamsRoute from 'confy/routes/teams/index';
import EnvsRoute from 'confy/routes/envs/index';
import UserRoute from 'confy/routes/user/index';

export default Backbone.Router.extend({
  initialize: function (options) {
    this.route('', PagesRoute.landing);
    this.route('how', PagesRoute.how);
    this.route('pricing', PagesRoute.pricing);
    this.route('privacy', PagesRoute.privacy);
    this.route('tos', PagesRoute.tos);

    this.route('login', PagesRoute.login);
    this.route('logout', PagesRoute.logout);
    this.route('register', PagesRoute.register);
    this.route('verify/:user/:token', PagesRoute.verify);

    this.route('settings', UserRoute.settings);

    this.route('orgs', OrgsRoute.list);
    this.route('orgs/:org', OrgsRoute.view);
    this.route('orgs/:org/_update', OrgsRoute.update);
    this.route('orgs/_create', OrgsRoute.create);

    this.route('orgs/:org/projects', ProjectsRoute.list);
    this.route('orgs/:org/projects/:project', ProjectsRoute.view);
    this.route('orgs/:org/projects/:project/access', ProjectsRoute.access);
    this.route('orgs/:org/projects/:project/_update', ProjectsRoute.update);
    this.route('orgs/:org/projects/_create', ProjectsRoute.create);

    this.route('orgs/:org/projects/:project/envs/:env', EnvsRoute.view);
    this.route('orgs/:org/projects/:project/envs/:env/_update', EnvsRoute.update);
    this.route('orgs/:org/projects/:project/envs/:env/_versions', EnvsRoute.versions);
    this.route('orgs/:org/projects/:project/envs/_create', EnvsRoute.create);

    this.route('orgs/:org/teams', TeamsRoute.list);
    this.route('orgs/:org/teams/:team', TeamsRoute.view);
    this.route('orgs/:org/teams/:team/_update', TeamsRoute.update);
    this.route('orgs/:org/teams/_create', TeamsRoute.create);
  },
  execute: function (callback, args) {
    jQuery('#delete-wrap').hide();

    if (!window.ENV.ON_PREMISE) {
      analytics.page({
        path: '/' + Backbone.history.fragment
      });
    }

    return Backbone.Router.prototype.execute.call(this, callback, args);
  }
});
