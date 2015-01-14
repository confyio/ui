/** @jsx React.DOM */

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    this.props.user.destroy({
      wait: true,
      success: function (model, response) {
        notif({
          msg: 'Successfully remove member <b>' + model.get('name') + '</b> from the team'
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
    var disabled = (this.props.user.get('username') == window.org.get('owner') || this.props.notOwner);

    return (
      <tr>
        <td>
          <a href={this.props.user.get('link')}>{this.props.user.get('username')}</a>
        </td>
        <td>
          <button className="btn btn-danger" disabled={disabled ? 'disabled' : ''} onClick={this.handleClick}>Remove Member</button>
        </td>
      </tr>
    );
  }
});
