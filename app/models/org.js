import OrgAdapter from 'confy/adapters/org';
import User from 'confy/models/user';

var Org = Ember.Model.extend({
  name: Ember.attr(),
  email: Ember.attr(),
  plan: Ember.attr(),
  owner: Ember.attr()
});

Org.url = '/orgs';

Org.adapter = OrgAdapter;

export default Org;
