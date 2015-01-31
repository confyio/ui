import Env from 'confy/models/env';
import EnvCollection from 'confy/collections/env';
import Config from 'confy/models/config';

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

EnvsHelper.config = function (callback) {
  if (window.env.config) return callback();

  window.env.config = new Config();

  window.env.config.fetch({
    success: function (child, data) {
      return callback();
    }
  });
}

export default EnvsHelper;
