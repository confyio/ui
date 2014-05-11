import TeamAdapter from 'confy/adapters/team';
import User from 'confy/models/user';
import Org from 'confy/models/org';

var Team = Ember.Model.extend({
  name: Ember.attr(),
  description: Ember.attr(),
  org: Ember.belongsTo(Org, {key: 'org'}),
  users: Ember.attr(Array)
});

Team.url = '/teams';

Team.adapter = TeamAdapter;

export default Team;
