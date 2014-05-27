import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsListView from 'confy/views/projects/list';

export default function (org, project, callback) {
  var self = this;

  ProjectsListRoute(org, function () {
    window.project = window.projects.findWhere({ id: project });

    React.renderComponent(ProjectsListView({}), $('#wrap .row')[0]);
  });
};
