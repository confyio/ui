import Team from 'confy/models/team';
import TeamProject from 'confy/models/team_project';
import TeamCollection from 'confy/collections/team';
import ProjectCollection from 'confy/collections/project';

var TeamsHelper = {};

TeamsHelper.list = function (callback) {
  if (window.teams) return callback();

  new Team().fetch({
    success: function (child, data) {
      window.teams = new TeamCollection(data);
      return callback();
    }
  });
};

TeamsHelper.projects = function (callback) {
  new TeamProject().fetch({
    success: function (child, data) {
      window.team_projects = new ProjectCollection(data);
      return callback();
    }
  });
}

export default TeamsHelper;
