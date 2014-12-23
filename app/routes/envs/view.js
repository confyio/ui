import ProjectsViewRoute from 'confy/routes/projects/view';
import EnvsInfoView from 'confy/views/envs/info';
import EnvsHelper from 'confy/helpers/envs';

export default function (org, project, env, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    EnvsHelper.list(function () {

      if (window.env && window.env.get('id') == env) {
        if (callback) return callback();
      }

      window.env = window.envs.findWhere({ id: env });

      if (callback) return callback();

      React.render(EnvsInfoView({}), $('#wrap')[0]);
    });
  });
};
