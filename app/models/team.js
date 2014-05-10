import TeamAdapter from 'confy/adapters/team';
import User from 'confy/models/user';
import Org from 'confy/models/org';

var Team = Ember.Model.extend({
  name: Ember.attr(),
  description: Ember.attr(),
  org: Ember.belongsTo(Org, {key: 'org'}),
  users: Ember.hasMany(User, {key: 'users'})
});

Team.url = '/teams';

Team.adapter = TeamAdapter;

export default Team;
