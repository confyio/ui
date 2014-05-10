import EnvAdapter from 'confy/adapters/env';
import Org from 'confy/models/org';
import Project from 'confy/models/project';

var Env = Ember.Model.extend({
  name: Ember.attr(),
  description: Ember.attr(),
  org: Ember.belongsTo(Org, {key: 'org'}),
  project: Ember.belongsTo(Project, {key: 'project'})
});

Env.url = '/envs';

Env.adapter = EnvAdapter;

export default Env;
