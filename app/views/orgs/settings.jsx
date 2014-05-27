/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (window.org.get('owner') === window.user.get('username')) {
      return (
        <div>
          <a href={window.org.get('link') + "/admin"}>
            <i className="fa fa-cog"></i>
          </a>
        </div>
      );
    }

    return;
  }
});
