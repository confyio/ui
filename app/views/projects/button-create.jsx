/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.type == 'Projects' && window.org) {
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
