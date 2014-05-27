import OrgsViewRoute from 'confy/routes/orgs/view';
import ProjectsHelper from 'confy/helpers/projects';

export default function (org, callback) {
  var self = this;

  OrgsViewRoute(org, function () {

    ProjectsHelper.list(function () {
      if (callback) return callback();

      self.navigate(window.org.get('link') + window.projects.at(0).get('link'), {
        trigger: true, replace: true
      });
    });
  });
};
