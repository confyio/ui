import ProjectsViewRoute from 'confy/routes/projects/view';
import EnvsInfoView from 'confy/views/envs/info';

export default function (org, project, env, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    if (window.env && window.env.get('id') == env) {
      if (callback) return callback();
    }

    window.env = window.envs.findWhere({ id: env });

    if (callback) return callback();

    React.render(EnvsInfoView({}), $('#wrap')[0]);
  });
};
