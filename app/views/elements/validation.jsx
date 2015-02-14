/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    this.props.direction = this.props.direction || 'top';

    if (this.props.message) {
      return (
        <div className={'tooltip ' + this.props.direction} role="tooltip">
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
