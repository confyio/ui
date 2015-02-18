/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ProjectsCreateFormView from 'confy/views/projects/create-form';

export default React.createClass({
  render: function () {
    var children;

    if (window.user.get('username') == window.org.get('owner')) {
      children = (
        <div>
          <h5 className="subheader">Lets get started by creating a new project</h5>
          <ProjectsCreateFormView />
        </div>
      );
    } else {
      children = (
        <h5 className="subheader">Ask your organization admin to create a project</h5>
      );
    }

    return (
      <MainView id="empty-projects" header="No projects" noAdmin="true" noActions="true">
        {children}
      </MainView>
    );
  }
});
