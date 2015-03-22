export default function (state, model, errs, type, self) {
  var keys;

  var dummyModel = {
    get: function (key) {
      return '';
    }
  };

  errs = errs || [];
  type = type || '';
  model = model || dummyModel;

  if (Array.isArray(state)) {
    keys = state;
    state = {};
  } else {
    keys = Object.keys(state);
  }

  var messages = {
    insecure: function (key) {
      return key.charAt(0).toUpperCase() + key.slice(1) + ' should be atleast 6 characters';
    },
    invalid: function (key) {
      if (key == 'email') {
        return 'The given email should be valid';
      }

      return 'The given ' + key + ' should be alphanumeric';
    },
    already_exists: function (key) {
      return type + ' with the given ' + key + ' already exists';
    },
    missing: function (key) {
      return key.charAt(0).toUpperCase() + key.slice(1) + ' should not be empty';
    }
  };

  keys.forEach(function (key) {
    state[key] = state[key] || {};
    state[key].className = "form-group";
    state[key].value = model.get(key);
    state[key].message = '';

    if (self) {
      self.refs[key].getDOMNode().className = 'form-control';
    }

    errs.forEach(function (err) {
      if (err.field == key) {
        state[key].className += " has-error";
        state[key].message = messages[err.code](key);
      }
    });
  });

  keys.forEach(function (key) {
    if (!state[key].message && self) {
      self.refs[key].getDOMNode().className = 'form-control correct';
    }
  });

  return state;
};
