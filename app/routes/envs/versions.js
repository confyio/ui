import EnvsViewRoute from 'confy/routes/envs/view';
import ProjectsListView from 'confy/views/projects/list';
import EnvsVersionsView from 'confy/views/envs/versions';
import EnvsHelper from 'confy/helpers/envs';

export default function (org, project, env, callback) {
  var self = this;

  EnvsViewRoute(org, project, env, function () {
    EnvsHelper.versions(function () {

      React.render(ProjectsListView({}), $('.sidebar')[0]);
      React.render(EnvsVersionsView({}), $('#wrap')[0]);
    });
  });
};
