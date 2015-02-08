/** @jsx React.DOM */

import EnvsListView from 'confy/views/envs/list';
import SideButtonView from 'confy/views/elements/sidebutton';
import EnvsCreateButtonView from 'confy/views/envs/button-create';

export default React.createClass({
  render: function () {
    var self = this
      , id = window.project && window.project.get('id');

    if (this.props.noActive) {
      id = '';
    }

    return (
      <ul className="nav nav-sidebar sidebar-projects">
        <SideButtonView type="Projects" />
        {window.projects.map(function (project) {
          return (
            <li role="presentation" key={project.get('key')} className={project.get('id') == id ? 'active' : ''}>
              <a href={project.get('link')}>
                <div>{project.get('name')}</div>
              </a>
              <EnvsCreateButtonView project={project} />
              <EnvsListView exist={project.get('id') == id} noActive={self.props.noEnvActive} />
            </li>
          );
        })}
      </ul>
    );
  }
});
