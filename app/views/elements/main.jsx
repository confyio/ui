/** @jsx React.DOM */

import ProjectsUpdateButtonView from 'confy/views/projects/button-update';
import TeamsUpdateButtonView from 'confy/views/teams/button-update';
import EnvsUpdateButtonView from 'confy/views/envs/button-update';

export default React.createClass({
  render: function () {
    var actions;

    if (!this.props.noActions) {
      actions = (
        <div className="actions">
          <TeamsUpdateButtonView type={this.props.type} />
          <EnvsUpdateButtonView type={this.props.type} />
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
          {this.props.children}
        </div>
      </div>
    );
  }
});
