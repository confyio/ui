import Org from 'confy/models/org';

export default {
  index: function () {
    (new Org({
      id: 'confyio'
    })).fetch().done(function (data) {
      console.log(data);
    });
  }
};
