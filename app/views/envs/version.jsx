/** @jsx React.DOM */

import Alert from 'confy/helpers/alert';

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();
  },
  render: function () {
    var time = moment.unix(this.props.version.time/1000);
    time = time.format('HH:mm, MMM DD, YYYY');

    return (
      <tr>
        <td>{time}</td>
        <td>
          <button className="btn btn-success" onClick={this.handleClick}>Use Version</button>
        </td>
      </tr>
    );
  }
});
