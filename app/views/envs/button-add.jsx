/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.type == 'Projects' && window.project) {
      return (
        <a className="btn btn-new" href={window.project.get('link') + '/envs/_add'}>
          <i className="fa fa-plus-square-o"></i>
          &nbsp;Add new Environment
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
