import ProjectsViewRoute from 'confy/routes/projects/view';
import ProjectsUpdateView from 'confy/views/projects/update';
import ProjectsListView from 'confy/views/projects/list';

export default function (org, project, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    if (window.user.get('username') != window.org.get('owner')) {
      self.navigate(window.project.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.render(ProjectsListView({}), $('.sidebar')[0]);
      React.render(ProjectsUpdateView({}), $('#wrap')[0]);
    }
  });
};
