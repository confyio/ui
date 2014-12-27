import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsCreateView from 'confy/views/projects/create';

export default function (org, callback) {
  var self = this;

  ProjectsListRoute(org, function () {
    if (window.user.get('username') != window.org.get('owner')) {
      if (window.projects.length == 0) {
        React.render(ProjectsEmptyView({}), $('#wrap')[0]);
      } else {
        if (!window.project) {
          window.project = window.projects.at(0);
        }

        self.navigate(window.project.get('link'), {
          trigger: true, replace: true
        });
      }
    } else {
      React.render(ProjectsCreateView({}), $('#wrap')[0]);
    }
  });
};
