import Env from 'confy/models/env';

export default Ember.Route.extend({
  model: function() {
    window.ORG = 'confy';
    window.PROJECT = 'main'
    return Env.find('staging');
  }
});
