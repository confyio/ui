/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  handleSubmit: function () {
    return;
  },
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView header="Create Environment">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" placeholder="Enter environment name" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input className="form-control" placeholder="Enter environment description" />
            </div>
            <button type="submit" className="btn btn-default">Create Environment</button>
          </form>
        </MainView>
      </div>
    );
  }
});
