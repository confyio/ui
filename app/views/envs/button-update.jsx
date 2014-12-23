/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Environment' && window.env && window.env.get('id') != 'production' && isOwner) {
      return (
        <a className="btn btn-edit" href={window.env.get('link') + '/_update'}>
          <i className="fa fa-edit"></i>
          &nbsp;Edit Environment
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
