/** @jsx React.DOM */

import ProfileView from 'confy/views/elements/profile';

export default React.createClass({
  render: function () {
    if (this.props.console) {
      $('body').attr('class', 'console');

      return (
        <ul className="nav navbar-nav navbar-right">
          <ProfileView type={this.props.type} />
        </ul>
      );
    } else if (this.props.type == 'Projects' || this.props.type == 'Teams' || this.props.type == 'Org') {
      $('body').attr('class', 'console');

      return (
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props.type == 'Projects' ? 'active' : ''}>
            <a href={window.org.get('link') + '/projects'}>Projects</a>
          </li>
          <li className={this.props.type == 'Teams' ? 'active' : ''}>
            <a href={window.org.get('link') + '/teams'}>Teams</a>
          </li>
          <ProfileView type={this.props.type} />
        </ul>
      );
    } else {
      $('body').attr('class', 'landing');

      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Pricing</a></li>
          <ProfileView type={this.props.type} />
        </ul>
      );
    };
  }
});
