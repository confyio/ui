import OrgsHelper from 'confy/helpers/orgs';

export default function (callback) {
  var self = this;

  OrgsHelper.list(function () {
    if (callback) return callback();

    self.navigate(window.orgs.at(0).get('link'), {
      trigger: true, replace: true
    });
  });
};
