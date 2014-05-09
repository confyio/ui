import UserAdapter from 'confy/adapters/user';

var User = Ember.Model.extend({
  username: Ember.attr(),
  email: Ember.attr(),
  verified: Ember.attr()
});

User.url = '/';

User.adapter = UserAdapter;

export default User;
