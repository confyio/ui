import User from 'confy/models/user';

export default Ember.Route.extend({
  model: function() {
    return User.find('user');
  }
});
