import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsCreateView from 'confy/views/projects/create';

export default function (org, callback) {
  var self = this;

  ProjectsListRoute(org, function () {
    delete window.project;

    React.renderComponent(ProjectsCreateView({}), $('#wrap .row')[0]);
  });
};
