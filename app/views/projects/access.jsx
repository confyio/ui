/** @jsx React.DOM */

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();
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
