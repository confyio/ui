import ProjectsViewRoute from 'confy/routes/projects/view';
import EnvsCreateView from 'confy/views/envs/create';

export default function (org, project, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    if (window.user.get('username') != window.org.get('owner')) {
      if (!window.env) {
        window.env = window.envs.at(0);
      }

      self.navigate(window.env.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.render(EnvsCreateView({}), $('#wrap')[0]);
    }
  });
};
