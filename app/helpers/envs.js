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

  new Config().fetch({
    success: function (child, data) {
      if (child.get('_encrypted')) {
        window.env.encrypted = child.get('_encrypted');
        child.unset('_encrypted');
      }

      child.set('_id', window.env.get('_id') + '/config');
      window.env.config = child;

      return callback();
    }
  });
}

export default EnvsHelper;
