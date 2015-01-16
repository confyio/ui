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
      <span>
        <div className="dropdown-toggle" id="org-dropdown" data-toggle="dropdown">
          <span>{windowOrg.get('name')}</span>
          <i className="fa fa-fw"></i>
        </div>
        <ul className="dropdown-menu" role="menu" aria-labelledby="org-dropdown">
          {window.orgs.map(function (org) {
            if (org.get('name') !== windowOrg.get('name')) {
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
