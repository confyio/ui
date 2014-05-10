import ProjectAdapter from 'confy/adapters/project';
import Org from 'confy/models/org';
import Team from 'confy/models/team';

var Project = Ember.Model.extend({
  name: Ember.attr(),
  description: Ember.attr(),
  org: Ember.belongsTo(Org, {key: 'org'}),
  teams: Ember.hasMany(Team, {key: 'teams'})
});

Project.url = '/projects';

Project.adapter = ProjectAdapter;

export default Project;
