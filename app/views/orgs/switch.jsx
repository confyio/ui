/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    return (
      <span>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
          {window.org.get('name')}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          {window.orgs.map(function (org) {
            if (org.get('name') !== window.org.get('name')) {
              return <li role="presentation" key={org.get('name')}><a role="menuitem" tabIndex="-1" href={org.get('link')}>{org.get('name')}</a></li>
            }
          })}
        </ul>
      </span>
    );
  }
});
