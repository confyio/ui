import EnvsViewRoute from 'confy/routes/envs/view';
import EnvsUpdateView from 'confy/views/envs/update';
import ProjectsListView from 'confy/views/projects/list';
import EnvsDeleteView from 'confy/views/envs/delete';

export default function (org, project, env, callback) {
  var self = this;

  EnvsViewRoute(org, project, env, function () {
    if (window.user.get('username') != window.org.get('owner')) {
      self.navigate(window.env.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.render(ProjectsListView({}), $('.sidebar')[0]);
      React.render(EnvsUpdateView({}), $('#wrap')[0]);
      React.render(EnvsDeleteView({}), $('#delete-wrap')[0]);
    }
  });
};
