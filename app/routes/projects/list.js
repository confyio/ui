import OrgsViewRoute from 'confy/routes/orgs/view';
import ProjectsHelper from 'confy/helpers/projects';
import NavbarView from 'confy/views/elements/navbar';
import ProjectsEmptyView from 'confy/views/projects/empty';

export default function (org, callback) {
  var self = this;

  OrgsViewRoute(org, function () {
    React.render(NavbarView({type: 'Projects'}), $('#right-nav')[0]);

    ProjectsHelper.list(function () {
      if (callback) return callback();

      if (window.projects.length == 0) {
        React.render(ProjectsEmptyView({}), $('#wrap')[0]);
      } else {
        self.navigate(window.projects.at(0).get('link'), {
          trigger: true, replace: true
        });
      }
    });
  });
};
