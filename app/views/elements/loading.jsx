/** @jsx React.DOM */

export default React.createClass({
  render: function () {
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
