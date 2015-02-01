/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    var windowOrg;

    if (this.props.empty) {
      windowOrg = {
        get: function () {
          return '';
        }
      };
    } else {
      windowOrg = window.org;
    }

    return (
      <div className="dropdown">
        <div className="dropdown-toggle" id="org-dropdown" data-toggle="dropdown">
          <div>{windowOrg.get('name')}</div>
          <i className="fa fa-fw"></i>
        </div>
        <ul className="dropdown-menu" role="menu" aria-labelledby="org-dropdown">
          {window.orgs.map(function (org) {
            if (org.get('name') !== windowOrg.get('name')) {
              return (
                <li role="presentation" key={org.get('key')}>
                  <a role="menuitem" tabIndex="-1" href={org.get('link')}>
                    <div>{org.get('name')}</div>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
});
