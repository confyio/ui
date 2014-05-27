import ProjectsListRoute from 'confy/routes/projects/list';

export default function (org, project, callback) {
  var self = this;

  ProjectsListRoute(org, function () {
    window.project = window.projects.findWhere({ id: project });
  });
};
