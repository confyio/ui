/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.type == 'Projects') {
      return (
        <a className="btn btn-new" href={window.org.get('link') + '/projects/_add'}>
          <i className="fa fa-plus-square-o"></i>
          &nbsp;Add new Project
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
