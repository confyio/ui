/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Projects' && window.org && isOwner) {
      return (
        <a className="btn btn-new" href={window.org.get('link') + '/projects/_create'}>
          <i className="fa fa-plus-square-o"></i>
          &nbsp;Add new Project
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
