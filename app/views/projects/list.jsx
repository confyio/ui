/** @jsx React.DOM */

import SidebarView from 'confy/views/sidebar';
import EnvsListView from 'confy/views/envs/list';

export default React.createClass({
  render: function () {
    var self = this
      , id = window.project && window.project.get('id');

    if (this.props.noActive === 'true') {
      id = '';
    }

    return (
      <SidebarView type="Projects">
        {window.projects.map(function (project) {
          return (
            <li role="presentation" key={project.get('key')} className={project.get('id') == id ? 'active' : ''}>
              <a href={project.get('link')}>
                <span>{project.get('name')}</span>
                <i className="fa fa-fw"></i>
              </a>
              <EnvsListView exist={project.get('id') == id} noActive={self.props.noEnvActive} />
            </li>
          );
        })}
      </SidebarView>
    );
  }
});
