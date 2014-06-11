/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView type="Project" header={window.project.get('name')}>
        </MainView>
      </div>
    );
  }
});
