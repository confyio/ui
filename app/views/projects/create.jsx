/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView type="Project" header="Create Project">
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" placeholder="Enter project name" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control" placeholder="Enter project description" />
          </div>
          <button className="btn btn-default">Create Project</button>
        </MainView>
      </div>
    );
  }
});
