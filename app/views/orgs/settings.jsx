/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (window.org.get('owner') === window.user.get('username')) {
      return (
        <div>
          <a href={window.org.get('link') + "/admin"}>
            <i className="fa fa-cog"></i>
          </a>
        </div>
      );
    } else {
      return <DummyView />;
    }
  }
});
