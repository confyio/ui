/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  getInitialState: function () {
    return { env: window.env };
  },
  handleSubmit: function () {
    return;
  },
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView header="Update Environment">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" disabled="disabled" defaultValue={this.state.env.get('name')} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input className="form-control" placeholder="Enter project description" defaultValue={this.state.env.get('description')} />
            </div>
            <button type="submit" className="btn btn-default">Update Environment</button>
          </form>
          <div className="panel panel-danger">
            <div className="panel-body">
              <p>
                <h4>Delete this environment</h4>
                <button className="btn btn-danger pull-right">Delete</button>
              </p>
              <p>Once you delete a project, there is no going back. Please be certain.</p>
            </div>
          </div>
        </MainView>
      </div>
    );
  }
});
