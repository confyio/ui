/** @jsx React.DOM */

import ProjectsUpdateButtonView from 'confy/views/projects/button-update';
import TeamsUpdateButtonView from 'confy/views/teams/button-update';
import EnvsUpdateButtonView from 'confy/views/envs/button-update';
import EnvsLockButtonView from 'confy/views/envs/button-lock';
import EnvsVersionButtonView from 'confy/views/envs/button-version';

export default React.createClass({
  render: function () {
    var actions, admin, envActions, alerts = window.flashes;
    delete window.flashes;

    if (!this.props.noActions) {
      actions = (
        <div className="actions">
          <EnvsUpdateButtonView type={this.props.type} />
          <TeamsUpdateButtonView type={this.props.type} />
          <ProjectsUpdateButtonView type={this.props.type} />
        </div>
      );
    }

    if (!this.props.noAdmin) {
      admin = (
        <div className="admin">
          ADMIN: <a href="#">{window.org.get('owner')}</a>
        </div>
      );
    }

    if (!this.props.isVersions) {
      envActions = (
        <div>
          <EnvsLockButtonView type={this.props.type} />
          <EnvsVersionButtonView type={this.props.type} isVersions={this.props.isVersions} />
        </div>
      );
    }

    return (
      <div className="content" id={this.props.id}>
        <div id="alerts" dangerouslySetInnerHTML={{ __html: alerts }}></div>
        <div>
          <h3 className="pageheader">
            {this.props.header}
          </h3>
          {envActions}
        </div>
        <div className="cleared" id="admin-actions">
          {admin}
          {actions}
        </div>
        <div className="seperator cleared"></div>
        {this.props.children}
      </div>
    );
  }
});
