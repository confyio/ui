import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsListView from 'confy/views/projects/list';
import EnvsHelper from 'confy/helpers/envs';

export default function (org, project, callback) {
  var self = this;

  ProjectsListRoute(org, function () {
    if (window.project && window.project.get('id') == project) {
      if (callback) return callback();
    }

    window.project = window.projects.findWhere({ id: project });

    delete window.envs;
    delete window.env;

    EnvsHelper.list(function () {
      if (callback) return callback();

      React.renderComponent(ProjectsListView({}), $('#wrap .row')[0]);
    });
  });
};
