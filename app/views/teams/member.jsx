/** @jsx React.DOM */

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    this.props.user.destroy({
      wait: true,
      success: function (model, response) {
        notif({
          msg: 'Successfully removed member <b>' + model.get('username') + '</b> from the team'
        });

        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        notif({
          type: 'error',
          msg: 'Unable to remove member. Please reload the page and try again.'
        });
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
            <button className="btn btn-danger" onClick={this.handleClick}>Remove Member</button>
          </td>
        </tr>
      );
    }
  }
});
