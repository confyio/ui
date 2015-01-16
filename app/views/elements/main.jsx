/** @jsx React.DOM */

import ProjectsUpdateButtonView from 'confy/views/projects/button-update';
import TeamsUpdateButtonView from 'confy/views/teams/button-update';
import EnvsUpdateButtonView from 'confy/views/envs/button-update';

export default React.createClass({
  render: function () {
    return (
      <div className="content">
        <div className="inner">
          <div className="actions">
            <TeamsUpdateButtonView type={this.props.type} />
            <EnvsUpdateButtonView type={this.props.type} />
            <ProjectsUpdateButtonView type={this.props.type} />
          </div>
          <h3 className="page-header">
            {this.props.header}
          </h3>
          {this.props.children}
        </div>
      </div>
    );
  }
});
