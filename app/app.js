import Router from 'confy/router';

/* Backbone customization */
Backbone.Model.idAttribute = '_id';

/* Start the application */
var App = new Router();

Backbone.history.start();

export default App;
