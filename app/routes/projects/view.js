import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsInfoView from 'confy/views/projects/info';
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

      React.renderComponent(ProjectsInfoView({}), $('#wrap .row')[0]);
    });
  });
};
