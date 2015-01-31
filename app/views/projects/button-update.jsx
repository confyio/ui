/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Project' && window.project && isOwner) {
      return (
        <a className="btn btn-edit" href={window.project.get('link') + '/_update'}>Edit Project</a>
      );
    } else {
      return <DummyView />;
    }
  }
});
