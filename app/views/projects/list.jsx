/** @jsx React.DOM */

import SidebarView from 'confy/views/sidebar';
import EnvsListView from 'confy/views/envs/list';

export default React.createClass({
  render: function () {
    var id = window.project && window.project.get('id');

    return (
      <SidebarView type="Projects">
        {window.projects.map(function (project) {
          return (
            <li role="presentation" key={project.get('key')} className={project.get('id') == id ? 'active' : ''}>
              <a href={project.get('link')}>
                {project.get('name')}
              </a>
              <EnvsListView exist={project.get('id') == id} />
            </li>
          );
        })}
      </SidebarView>
    );
  }
});
