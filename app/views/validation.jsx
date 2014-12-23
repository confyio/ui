/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.message) {
      return (
        <span className="help-block">{this.props.message}</span>
      );
    } else {
      return (
        <DummyView />
      );
    }
  }
});
