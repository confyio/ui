import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsInfoView from 'confy/views/projects/info';
import EnvsHelper from 'confy/helpers/envs';
import ProjectsHelper from 'confy/helpers/projects';
import ProjectsListView from 'confy/views/projects/list';

export default function (org, project, callback) {
  var self = this;

  ProjectsListRoute(org, function () {
    if (window.project && window.project.get('id') == project) {
      if (callback) return callback();
    } else {
      window.project = window.projects.findWhere({ id: project });

      if (!window.project) {
        return window.App.navigate(window.org.get('link') + '/projects', {
          trigger: true, replace: true
        });
      }

      delete window.envs;
      delete window.env;
      delete window.access;
    }

    EnvsHelper.list(function () {
      if (callback) return callback();

      React.render(ProjectsListView({noEnvActive: true}), $('.sidebar')[0]);
      React.render(ProjectsInfoView(), $('#wrap')[0]);
    });
  });
};
