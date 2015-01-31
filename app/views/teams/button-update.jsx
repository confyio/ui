/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Team' && window.team && window.team.get('id') != 'owners' && isOwner) {
      return (
        <a className="btn" href={window.team.get('link') + '/_update'}>Edit Team</a>
      );
    } else {
      return <DummyView />;
    }
  }
});
