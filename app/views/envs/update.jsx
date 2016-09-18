/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['description'], window.env);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.env.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Stage', self));
    });

    window.env.save({
      description: this.refs.description.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
        Alert('Successfully updated the stage <b>' + window.env.get('name') + '</b>');
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Stage', self));
        }
      }
    });
  },
  render: function () {
    return (
      <MainView header="Update Stage">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Stage Name</label>
            <p className="form-control-static">{window.env.get('name')}</p>
          </div>
          <div className={this.state.description.className}>
            <label>Description</label>
            <ValidationView message={this.state.description.message} />
            <input className="form-control" placeholder="Enter stage description" ref="description" defaultValue={this.state.description.value} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </MainView>
    );
  }
});
