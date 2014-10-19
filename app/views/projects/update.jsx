/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView header="Update Project">
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" disabled="disabled" defaultValue={window.project.get('name')} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control" placeholder="Enter project description" defaultValue={window.project.get('description')} />
          </div>
          <button className="btn btn-default">Update Project</button>
          <div className="panel panel-danger">
            <div className="panel-body">
              <p>
                <h4>Delete this project</h4>
                <button className="btn btn-danger pull-right">Delete</button>
              </p>
              <p>Once you delete a project, there is no going back. Please be certain.</p>
              <p>All the environments under this project will be deleted.</p>
            </div>
          </div>
        </MainView>
      </div>
    );
  }
});
