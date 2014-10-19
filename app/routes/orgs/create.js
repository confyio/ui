import OrgsListRoute from 'confy/routes/orgs/list';
import OrgsCreateView from 'confy/views/orgs/create';

export default function (callback) {
  var self = this;

  OrgsListRoute(function () {
    delete window.org;

    React.renderComponent(OrgsCreateView(), $('#wrap .row')[0]);
  });
};
