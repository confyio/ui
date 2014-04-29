import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

var App = Ember.Application.extend({
  modulePrefix: 'confy',
  Resolver: Resolver
});

loadInitializers(App, 'confy');

export default App;
