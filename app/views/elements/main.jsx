/** @jsx React.DOM */

import ProjectsUpdateButtonView from 'confy/views/projects/button-update';
import TeamsUpdateButtonView from 'confy/views/teams/button-update';
import EnvsUpdateButtonView from 'confy/views/envs/button-update';
import EnvsLockButtonView from 'confy/views/envs/button-lock';

export default React.createClass({
  render: function () {
    var actions, admin, alerts = window.flashes;
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

    return (
      <div className="content" id={this.props.id}>
        <div id="alerts" dangerouslySetInnerHTML={{ __html: alerts }}></div>
        <div>
          <h3 className="pageheader">
            {this.props.header}
          </h3>
          <EnvsLockButtonView type={this.props.type} />
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
