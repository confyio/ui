import Team from 'confy/models/team';
import Member from 'confy/models/member';
import TeamProject from 'confy/models/team_project';
import TeamCollection from 'confy/collections/team';
import UserCollection from 'confy/collections/user';
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

TeamsHelper.users = function (callback) {
  new Member().fetch({
    success: function (child, data) {
      window.members = new UserCollection(data);
      return callback();
    }
  });
}

export default TeamsHelper;
