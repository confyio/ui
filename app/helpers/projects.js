import Project from 'confy/models/project';
import ProjectTeam from 'confy/models/project_team';
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
  new ProjectTeam().fetch({
    success: function (child, data) {
      window.project_teams = new TeamCollection(data);
      return callback();
    }
  });
}

export default ProjectsHelper;
