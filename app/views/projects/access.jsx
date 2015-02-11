/** @jsx React.DOM */

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    this.props.team.destroy({
      wait: true,
      success: function (model, response) {
        notif({
          msg: 'Successfully revoked access to the team <b>' + model.get('name') + '</b>'
        });

        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        notif({
          type: 'error',
          msg: 'Unable to revoke access. Please reload the page and try again.'
        });
      }
    });
  },
  render: function () {
    if (this.props.team.get('id') == 'owners' || this.props.notOwner) {
      return (
        <tr>
          <td colSpan="2">
            <a href={this.props.team.get('link')}>{this.props.team.get('name')}</a>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>
            <a href={this.props.team.get('link')}>{this.props.team.get('name')}</a>
          </td>
          <td>
            <button className="btn delete" onClick={this.handleClick}>
              <i className="fa fa-fw"></i>
              <span>Revoke Access</span>
            </button>
          </td>
        </tr>
      );
    }
  }
});
