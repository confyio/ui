import ProjectsViewRoute from 'confy/routes/projects/view';
import EnvsInfoView from 'confy/views/envs/info';
import EnvsHelper from 'confy/helpers/envs';

export default function (org, project, env, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    EnvsHelper.list(function () {

      if (window.env && window.env.get('id') == env && window.env.config) {
        if (callback) return callback();
      }

      window.env = window.envs.findWhere({ id: env });

      if (!window.env) {
        return window.App.navigate(window.project.get('link') + '/envs', {
          trigger: true, replace: true
        });
      }

      if (window.env.config) {
        if (callback) return callback();
      }

      EnvsHelper.config(function () {
        React.render(EnvsInfoView({}), $('#wrap')[0]);
      });
    });
  });
};
