/** @jsx React.DOM */

import ProjectsEditButtonView from 'confy/views/projects/button-edit';
import TeamsEditButtonView from 'confy/views/teams/button-edit';
import EnvsEditButtonView from 'confy/views/envs/button-edit';

export default React.createClass({
  render: function () {
    return (
      <div className="col-sm-9 col-md-10 main">
        <div className="inner">
          <div className="actions">
            <TeamsEditButtonView type={this.props.type} />
            <EnvsEditButtonView type={this.props.type} />
            <ProjectsEditButtonView type={this.props.type} />
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
