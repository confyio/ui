/** @jsx React.DOM */

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    this.props.user.destroy({
      wait: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        //TODO: Set notification
        console.log(model, response);
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
