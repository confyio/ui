/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView type="Project" header="No projects">
          <p>Please create one.</p>
        </MainView>
      </div>
    );
  }
});
