import Project from 'confy/models/project';
import ProjectCollection from 'confy/collections/project';

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

export default ProjectsHelper;
