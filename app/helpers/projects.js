import Project from 'confy/models/project';
import Access from 'confy/models/access';
import ProjectCollection from 'confy/collections/project';
import AccessCollection from 'confy/collections/access';

var ProjectsHelper = {};

ProjectsHelper.list = function (callback) {
  if (window.projects) return callback();

  new Project().fetch({
    success: function (child, data) {
      window.projects = new ProjectCollection(data);
      return callback();
    }
  });
};

ProjectsHelper.teams = function (callback) {
  if (window.access) return callback();

  new Access().fetch({
    success: function (child, data) {
      window.access = new AccessCollection(data);
      return callback();
    }
  });
}

export default ProjectsHelper;
