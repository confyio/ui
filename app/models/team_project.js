import SyncHelper from 'confy/helpers/sync';
import Project from 'confy/models/project';

export default Project.extend({
  sync: function (method, model, options) {
    if (method != 'read') {
      return;
    }

    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/teams/' + window.team.get('id') + '/projects';

    return SyncHelper.call(this, method, model, options);
  }
});
