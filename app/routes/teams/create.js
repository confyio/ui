import TeamsListRoute from 'confy/routes/teams/list';
import TeamsCreateView from 'confy/views/teams/create';

export default function (org, callback) {
  var self = this;

  TeamsListRoute(org, function () {
    delete window.team;

    React.renderComponent(TeamsCreateView({}), $('#wrap .row')[0]);
  });
};
