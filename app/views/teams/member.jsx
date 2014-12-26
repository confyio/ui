/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    var disabled = (this.props.user.get('username') == window.org.get('owner') || this.props.notOwner);

    return (
      <tr>
        <td>
          <a href={this.props.user.get('link')}>{this.props.user.get('username')}</a>
        </td>
        <td>
          <button className="btn btn-danger" disabled={disabled ? 'disabled' : ''}>Remove Member</button>
        </td>
      </tr>
    );
  }
});
