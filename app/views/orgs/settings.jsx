/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (window.org.owner === window.user.username) {
      return (
        <a href={"#orgs/" + window.org.name.toLowerCase() + "/admin"}>
          <i className="fa fa-cog"></i>
        </a>
      );
    }
  }
});
