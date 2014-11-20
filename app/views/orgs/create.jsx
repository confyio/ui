/** @jsx React.DOM */

import MainView from 'confy/views/main';

export default React.createClass({
  handleSubmit: function () {
    return;
  },
  render: function () {
    return (
      <div>
        <MainView type="Org" header="Create Organization">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" placeholder="Enter organization name" />
            </div>
            <div className="form-group">
              <label>Billing Email</label>
              <input type="email" className="form-control" placeholder="Enter organization's billing email" />
            </div>
            <button type="submit" className="btn btn-default">Create Organization</button>
          </form>
        </MainView>
      </div>
    );
  }
});
