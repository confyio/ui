/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.type == 'Project') {
      return (
        <a className="btn btn-edit" href={window.project.get('link') + '/_edit'}>
          <i className="fa fa-edit"></i>
          &nbsp;Edit Project
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
