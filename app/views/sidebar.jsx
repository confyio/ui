/** @jsx React.DOM */

import SideButtonView from 'confy/views/sidebutton';

export default React.createClass({
  render: function () {
    return (
      <div className="sidebar">
        <SideButtonView type={this.props.type} />
        <ul className="nav nav-sidebar">
          {this.props.children}
        </ul>
      </div>
    );
  }
});
