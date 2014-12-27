import Team from 'confy/models/team';
import Member from 'confy/models/member';
import TeamProject from 'confy/models/team_project';
import TeamCollection from 'confy/collections/team';
import TeamProjectCollection from 'confy/collections/team_project';
import MemberCollection from 'confy/collections/member';

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
  if (window.team_projects) return callback();

  new TeamProject().fetch({
    success: function (child, data) {
      window.team_projects = new TeamProjectCollection(data);
      return callback();
    }
  });
}

TeamsHelper.users = function (callback) {
  if (window.members) return callback();

  new Member().fetch({
    success: function (child, data) {
      window.members = new MemberCollection(data);
      return callback();
    }
  });
}

export default TeamsHelper;
