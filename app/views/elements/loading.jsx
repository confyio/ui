/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    if (this.props.noDummy === false) {
      return (
        <DummyView />
      );
    };

    return (
      <div className="content">
        <div id="loader">
          <div id="loader-out" className="box">
            <div id="loader-in" className="box"></div>
            <div className="ballbox box">
              <div id="first-in" className="ball"></div>
              <div id="second-in" className="ball"></div>
            </div>
          </div>
          <div className="ballbox box">
            <div id="first-out" className="ball"></div>
            <div id="second-out" className="ball"></div>
          </div>
        </div>
      </div>
    );
  }
});
