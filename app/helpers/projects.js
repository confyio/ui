import Project from 'confy/models/project';
import Access from 'confy/models/access';
import ProjectCollection from 'confy/collections/project';
import TeamCollection from 'confy/collections/team';

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
  new Access().fetch({
    success: function (child, data) {
      window.access = new TeamCollection(data);
      return callback();
    }
  });
}

export default ProjectsHelper;
