import ProjectsViewRoute from 'confy/routes/projects/view';
import ProjectsUpdateView from 'confy/views/projects/update';
import ProjectsListView from 'confy/views/projects/list';
import ProjectsDeleteView from 'confy/views/projects/delete';

export default function (org, project, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    if (window.user.get('username') != window.org.get('owner')) {
      return self.navigate(window.project.get('link'), {
        trigger: true, replace: true
      });
    }

    React.render(ProjectsListView({noEnvActive: true}), $('.sidebar')[0]);
    React.render(ProjectsUpdateView({}), $('#wrap')[0]);
    React.render(ProjectsDeleteView({}), $('#delete-wrap')[0]);
  });
};
