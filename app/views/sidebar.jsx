/** @jsx React.DOM */

import ProjectsAddButtonView from 'confy/views/projects/button-add';
import TeamsAddButtonView from 'confy/views/teams/button-add';
import EnvsAddButtonView from 'confy/views/envs/button-add';

export default React.createClass({
  render: function () {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <TeamsAddButtonView type={this.props.type} />
        <EnvsAddButtonView type={this.props.type} />
        <ProjectsAddButtonView type={this.props.type} />
        <ul className="nav nav-sidebar">
          <li className="head">{this.props.type}</li>
          {this.props.children}
        </ul>
      </div>
    );
  }
});
