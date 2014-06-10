/** @jsx React.DOM */

import SidebarView from 'confy/views/sidebar';
import EnvsListView from 'confy/views/envs/list';

export default React.createClass({
  render: function () {
    var id = window.project && window.project.get('id');

    return (
      <SidebarView type="Projects">
        {window.projects.map(function (project) {
          if (project.get('id') != id) {
            return (
              <li role="presentation" key={project.get('key')}>
                <a href={project.get('link')}>
                  {project.get('name')}
                </a>
              </li>
            );
          } else {
            return (
              <li role="presentation" key={project.get('key')} className="active">
                <a href={project.get('link')}>
                  {project.get('name')}
                </a>
                <EnvsListView />
              </li>
            );
          }
        })}
      </SidebarView>
    );
  }
});
