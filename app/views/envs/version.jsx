/** @jsx React.DOM */

import Alert from 'confy/helpers/alert';

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    var config = this.props.version.config;

    if (typeof config == 'string') {
      config = { _encrypted: config };
    } else {
      window.env.config.unset('_encrypted');
    }

    window.env.config.save(config, {
      method: 'put',
      wait: true,
      success: function (model, response) {
        Alert('Successfully rolled back your credentials', null, true);
        delete window.env.config;
        delete window.env.encrypted;
        delete window.env.decrypted;

        window.App.navigate(window.env.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        Alert('Unable to rollback credentials. Please reload the page and try again', 'danger');
      }
    });
  },
  render: function () {
    var time = moment.unix(this.props.version.time/1000);
    time = time.format('HH:mm, MMM DD, YYYY');

    return (
      <tr>
        <td>{this.props.version.user.fullname}</td>
        <td>{time}</td>
        <td>
          <button className="btn btn-success" disabled={this.props.noUse} onClick={this.handleClick}>Use Version</button>
        </td>
      </tr>
    );
  }
});
