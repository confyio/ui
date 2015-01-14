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
        //TODO: Set notification
        console.log(model, response);
      }
    });
  },
  render: function () {
    var disabled = (this.props.team.get('id') == 'owners' || this.props.notOwner);

    return (
      <tr>
        <td>
          <a href={this.props.team.get('link')}>{this.props.team.get('name')}</a>
        </td>
        <td>
          <button className="btn btn-danger" disabled={disabled ? 'disabled' : ''} onClick={this.handleClick}>Revoke Access</button>
        </td>
      </tr>
    );
  }
});
