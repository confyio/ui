import EnvsViewRoute from 'confy/routes/envs/view';
import EnvsUpdateView from 'confy/views/envs/update';

export default function (org, project, env, callback) {
  var self = this;

  EnvsViewRoute(org, project, env, function () {
    if (window.user.get('username') != window.org.get('owner') || window.env.get('id') == 'production') {
      self.navigate(window.env.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.renderComponent(EnvsUpdateView({}), $('#wrap')[0]);
    }
  });
};
