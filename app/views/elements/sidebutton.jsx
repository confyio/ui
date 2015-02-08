/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    var title, isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Teams') {
      title = 'New Team';
    } else if (this.props.type == 'Projects') {
      title = 'New Project';
    }

    if (window.org && isOwner) {
      return (
        <li className="sidebutton">
          <a className="btn" href={window.org.get('link') + '/' + this.props.type.toLowerCase() + '/_create'}>
            <i className="fa fa-fw fa-plus"></i>
            <div>{title}</div>
          </a>
        </li>
      );
    } else {
      return <DummyView />;
    }
  }
});
