/** @jsx React.DOM */

import Alert from 'confy/helpers/alert';

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    this.props.user.destroy({
      wait: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
        Alert('Successfully removed member <b>' + model.get('username') + '</b> from the team');
      },
      error: function (model, response) {
        Alert('Unable to remove member. Please reload the page and try again.', 'danger');
      }
    });
  },
  render: function () {
    if (this.props.user.get('username') == window.org.get('owner') || this.props.notOwner) {
      return (
        <tr>
          <td colSpan="2">
            <a href={this.props.user.get('link')}>{this.props.user.get('username')}</a>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>
            <a href={this.props.user.get('link')}>{this.props.user.get('username')}</a>
          </td>
          <td>
            <button className="btn delete" onClick={this.handleClick}>
              <i className="fa fa-fw"></i>
              <span>Remove Member</span>
            </button>
          </td>
        </tr>
      );
    }
  }
});
