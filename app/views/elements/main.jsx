/** @jsx React.DOM */

import ProjectsUpdateButtonView from 'confy/views/projects/button-update';
import TeamsUpdateButtonView from 'confy/views/teams/button-update';
import EnvsUpdateButtonView from 'confy/views/envs/button-update';
import EnvsCreateButtonView from 'confy/views/envs/button-create';
import EnvsLockButtonView from 'confy/views/envs/button-lock';

export default React.createClass({
  render: function () {
    var actions;

    if (!this.props.noActions) {
      actions = (
        <div className="actions">
          <EnvsCreateButtonView type={this.props.type} />
          <EnvsLockButtonView type={this.props.type} />
          <EnvsUpdateButtonView type={this.props.type} />
          <TeamsUpdateButtonView type={this.props.type} />
          <ProjectsUpdateButtonView type={this.props.type} />
        </div>
      );
    };

    return (
      <div className={this.props.singleColumn ? "content-single" : "content"}>
        <div className="inner">
          {actions}
          <h3 className="page-header">
            {this.props.header}
          </h3>
          <div className="seperator"></div>
          {this.props.children}
        </div>
      </div>
    );
  }
});
