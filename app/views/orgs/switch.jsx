/** @jsx React.DOM */

import OrgsUpdateButtonView from 'confy/views/orgs/button-update';

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
            var className = ''
              , isOwner = (window.user.get('username') == org.get('owner'))
              , userOrg = (window.user.get('username') == org.get('id'));

            if (!isOwner || userOrg) {
              className = ' no-edit-org';
            }

            return (
              <li className={(org.get('name') !== windowOrg.get('name') ? '' : 'active') + className} role="presentation" key={org.get('key')}>
                <a className="org-name" role="menuitem" tabIndex="-1" href={org.get('link')}>
                  <div>{org.get('name')}</div>
                </a>
                <OrgsUpdateButtonView org={org} />
              </li>
            );
          })}
          <li className="create-button">
            <a className="btn" href="#orgs/_create">
              <i className="fa fa-fw"></i>
              <div>New Organization</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});
