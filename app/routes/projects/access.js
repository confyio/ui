import ProjectsViewRoute from 'confy/routes/projects/view';
import ProjectsTeamsView from 'confy/views/projects/teams';
import ProjectsListView from 'confy/views/projects/list';
import ProjectsHelper from 'confy/helpers/projects';

export default function (org, project, callback) {
  var self = this;

  ProjectsViewRoute(org, project, function () {
    ProjectsHelper.teams(function () {
      React.render(ProjectsListView({noEnvActive: true}), $('.sidebar')[0]);
      React.render(ProjectsTeamsView({}), $('#wrap')[0]);
    });
  });
};
