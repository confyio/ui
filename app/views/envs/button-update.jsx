/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.type == 'Environment' && window.env) {
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
