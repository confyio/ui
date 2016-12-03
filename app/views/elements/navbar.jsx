/** @jsx React.DOM */

import ProfileView from 'confy/views/elements/profile';

export default React.createClass({
  render: function () {
    if (['Project', 'Team', 'Org', 'Settings'].indexOf(this.props.type) != -1) {
      $('body').attr('class', 'console');

      return (
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props.type == 'Projects' ? 'active' : ''}>
            <a href={window.org.get('link') + '/projects'}>Projects</a>
          </li>
          <li className={this.props.type == 'Teams' ? 'active' : ''}>
            <a href={window.org.get('link') + '/teams'}>Teams</a>
          </li>
          <ProfileView avatar="true" />
        </ul>
      );
    } else {
      $('body').attr('class', 'landing ' + (this.props.landing_suffix || ''));

      var pricing;

      if (!window.ENV.ON_PREMISE) {
        pricing = (
          <li><a href="#pricing">Pricing</a></li>
        );
      }

      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#how">How it works</a></li>
          {pricing}
          <ProfileView type={this.props.type} />
          <ProfileView avatar="true" />
        </ul>
      );
    };
  }
});
