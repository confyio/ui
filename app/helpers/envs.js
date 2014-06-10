import Env from 'confy/models/env';
import EnvCollection from 'confy/collections/env';

var EnvsHelper = {};

EnvsHelper.list = function (callback) {
  if (window.envs) return callback();

  new Env().fetch({
    success: function (child, data) {
      window.envs = new EnvCollection(data);
      return callback();
    }
  });
};

export default EnvsHelper;
