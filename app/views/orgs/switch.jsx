/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    return (
      <span>
        <div className="dropdown-toggle" id="org-dropdown" data-toggle="dropdown">
          <span>{window.org.get('name')}</span>
          <i className="fa fa-fw"></i>
        </div>
        <ul className="dropdown-menu" role="menu" aria-labelledby="org-dropdown">
          {window.orgs.map(function (org) {
            if (org.get('name') !== window.org.get('name')) {
              return (
                <li role="presentation" key={org.get('key')}>
                  <a role="menuitem" tabIndex="-1" href={org.get('link')}>
                    <span>{org.get('name')}</span>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </span>
    );
  }
});
