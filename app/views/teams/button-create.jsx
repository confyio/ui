/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Teams' && window.org && isOwner) {
      return (
        <a className="btn btn-new" href={window.org.get('link') + '/teams/_create'}>
          <i className="fa fa-plus-square-o"></i>
          &nbsp;Add new Team
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
