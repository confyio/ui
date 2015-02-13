/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    if (this.props.message) {
      return (
        <div className="tooltip top" role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">{this.props.message}</div>
        </div>
      );
    } else {
      return (
        <DummyView />
      );
    }
  }
});
