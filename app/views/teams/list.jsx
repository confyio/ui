/** @jsx React.DOM */

import SidebarView from 'confy/views/sidebar';

export default React.createClass({
  render: function () {
    var id = window.team && window.team.get('id');

    if (this.props.noActive === 'true') {
      id = '';
    }

    return (
      <SidebarView type="Teams">
        {window.teams.map(function (team) {
          return (
            <li role="presentation" key={team.get('key')} className={team.get('id') == id ? 'active' : ''}>
              <a href={team.get('link')}>
                <span>{team.get('name')}</span>
              </a>
            </li>
          )
        })}
      </SidebarView>
    );
  }
});
