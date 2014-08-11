import OrgsViewRoute from 'confy/routes/orgs/view';
import ProjectsHelper from 'confy/helpers/projects';
import ProjectsEmptyView from 'confy/views/projects/empty';

export default function (org, callback) {
  var self = this;

  OrgsViewRoute(org, function () {

    ProjectsHelper.list(function () {
      if (callback) return callback();

      if (window.projects.length == 0) {
        React.renderComponent(ProjectsEmptyView({}), $('#wrap .row')[0]);
      } else {
        self.navigate(window.projects.at(0).get('link'), {
          trigger: true, replace: true
        });
      }
    });
  });
};
