/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (window.org.owner === window.user.username) {
      return (
        <div>
          <a href={"#orgs/" + window.org.lname + "/admin"}>
            <i className="fa fa-cog"></i>
          </a>
        </div>
      );
    }

    return;
  }
});
