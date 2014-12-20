/** @jsx React.DOM */

import ProjectsCreateButtonView from 'confy/views/projects/button-create';
import TeamsCreateButtonView from 'confy/views/teams/button-create';
import EnvsCreateButtonView from 'confy/views/envs/button-create';

export default React.createClass({
  render: function () {
    return (
      <div className="sidebar">
        <TeamsCreateButtonView type={this.props.type} />
        <EnvsCreateButtonView type={this.props.type} />
        <ProjectsCreateButtonView type={this.props.type} />
        <ul className="nav nav-sidebar">
          {this.props.children}
        </ul>
      </div>
    );
  }
});
