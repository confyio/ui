/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    return (
      <span>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
          {window.org.name}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          {window.orgs.map(function (org) {
            if (org.name !== window.org.name) {
              return <li role="presentation" key={org.name}><a role="menuitem" tabindex="-1" href={"#orgs/" + org.name.toLowerCase()}>{org.name}</a></li>
            }
          })}
        </ul>
      </span>
    );
  }
});
